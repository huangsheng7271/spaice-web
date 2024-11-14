"use client"

import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { useElementSize, useElementBounding } from '@reactuses/core';
import { ItemOption } from '@/types/masonry';

interface MasonryProps {
  // 是否启用虚拟列表
  virtual?: boolean
  rowKey?: string
  // item间隔
  gap?: number
  // 容器内边距
  padding?: number | string
  // 预加载屏数量 [top, bottom]
  preloadScreenCount?: [number, number]
  // item最小宽度
  itemMinWidth?: number
  // 最大列数
  maxColumnCount?: number
  // 最小列数
  minColumnCount?: number
  // 数据
  items?: any[]
  // 计算单个item高度的方法
  calcItemHeight?: (item: ItemOption, itemWidth: number) => number,
  children?: (item: any, index: number) => ReactNode;
}

interface SpaceOption {
  index: number;
  item: any;
  column: number;
  top: number;
  left: number;
  bottom: number;
  height: number;
}

const Masonry: React.FC<MasonryProps> = ({
  virtual = true,
  rowKey = 'id',
  gap = 10,
  padding = 0,
  preloadScreenCount = [0, 0],
  itemMinWidth = 250,
  maxColumnCount = 5,
  minColumnCount = 2,
  items = [],
  calcItemHeight = () => 250,
  children
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth] = useElementSize(contentRef);
  const { top: contentTop } = useElementBounding(contentRef)

  // 计算列数
  const columnCount = useMemo<number>(() => {
    if (!contentWidth) {
      return 0
    }
    const cWidth = contentWidth
    if (cWidth >= itemMinWidth * 2) {
      const count = Math.floor(cWidth / itemMinWidth)
      if (maxColumnCount && count > maxColumnCount) {
        return maxColumnCount
      }
      return count
    }
    return minColumnCount
  }, [contentWidth, itemMinWidth, maxColumnCount, minColumnCount]);

  // 计算每个item占据的宽度: (容器宽度 - 间隔) / 列数
  const itemWidth = useMemo<number>(() => {
    if (!contentWidth || columnCount <= 0) {
      return 0
    }
    // 列之间的间隔
    const gapSum = (columnCount - 1) * gap
    return Math.ceil((contentWidth - gapSum) / columnCount)
  }, [contentWidth, columnCount])

  // 每列距离顶部的距离
  const columnsTop = useRef<number[]>(new Array(columnCount).fill(0));

  // 计算每个item占据的空间
  const [itemSpaces, setItemSpaces] = useState<SpaceOption[]>([]);
  useEffect(() => {
    if (!columnCount) {
      setItemSpaces([])
      return
    }
    const length = items.length
    const spaces = new Array(length)

    let start = 0
    // 是否启用缓存：只有当新增元素时，需要计算新增元素的信息
    const cache = itemSpaces.length && length > itemSpaces.length
    if (cache) {
      start = itemSpaces.length
    } else {
      columnsTop.current = new Array(columnCount).fill(0);
    }

    // 为了高性能采用for-i
    for (let i = 0; i < length; i++) {
      if (cache && i < start) {
        spaces[i] = itemSpaces[i]
        continue
      }

      const columnIndex = getColumnIndex()
      // 计算元素的高度
      const h = calcItemHeight(items[i], itemWidth)
      const top = columnsTop.current[columnIndex]
      const left = (itemWidth + gap) * columnIndex

      const space: SpaceOption = {
        index: i,
        item: items[i],
        column: columnIndex,
        top: top,
        left: left,
        bottom: top + h,
        height: h
      }

      // 累加当前列的高度
      columnsTop.current[columnIndex] += h + gap;
      spaces[i] = space
    }
    setItemSpaces(spaces)
  }, [columnCount, itemWidth, items, gap])


  // 虚拟列表逻辑：需要渲染的items
  const itemRenderList = useMemo<SpaceOption[]>(() => {
    const length = itemSpaces.length
    if (!length) {
      return []
    }
    if (!virtual) {
      return itemSpaces
    }

    // 父节点距离顶部的距离
    const parentTop = contentRef.current?.parentElement?.offsetTop ?? 0

    const tp = -contentTop + parentTop

    const [topPreloadScreenCount, bottomPreloadScreenCount] = preloadScreenCount
    // 避免多次访问
    const innerHeight = contentRef.current?.parentElement?.clientHeight ?? 0

    // 顶部的范围: 向上预加载preloadScreenCount个屏幕，Y轴上部
    const minLimit = tp - topPreloadScreenCount * innerHeight
    // 底部的范围: 向下预加载preloadScreenCount个屏幕
    const maxLimit = tp + (bottomPreloadScreenCount + 1) * innerHeight

    const items = []

    for (let i = 0; i < length; i++) {
      const v = itemSpaces[i]
      const t = v.top
      const b = v.bottom
      // 这里的逻辑是：
      // 只要元素部分出现在可视区域里就算作可见，因此有三段判断:
      // 1. 元素的上边界在容器内
      // 2. 元素的下边界在容器内
      // 3. 元素覆盖了整个容器
      if (
        (t >= minLimit && t <= maxLimit) ||
        (b >= minLimit && b <= maxLimit) ||
        (t < minLimit && b > maxLimit)
      ) {
        items.push(v)
      }
    }
    return items
  }, [
    itemSpaces,
    virtual,
    contentTop,
    preloadScreenCount,
  ])

  // 获取当前元素应该处于哪一列
  const getColumnIndex = (): number => {
    return columnsTop.current.indexOf(Math.min(...columnsTop.current));
  }

  const isNumber = (value: any): boolean => {
    return Object.prototype.toString.call(value) === '[object Number]';
  };

  return (
    <div
      ref={contentRef}
      style={{
        position: 'relative',
        willChange: 'height',
        height: `${Math.max(...columnsTop.current)}px`,
        padding: `${isNumber(padding) ? padding + 'px' : padding}`
      }}
    >
      {itemRenderList.map((data) => (
        <div
          key={`${data.item[rowKey] + data.index}`}
          style={{
            position: 'absolute',
            contentVisibility: 'auto',
            width: `${itemWidth}px`,
            height: `${data.height}px`,
            transform: `translate(${data.left}px, ${data.top}px)`,
            containIntrinsicSize: `${itemWidth}px ${data.height}px`
          }}
          data-index={data.index}
        >
          {children ? children(data.item, data.index) : null}
        </div>
      ))}
    </div>
  );
};

export default Masonry;

