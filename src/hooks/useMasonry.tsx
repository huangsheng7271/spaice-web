import { useRef, useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { ItemOption, PageProps } from '@/types/masonry';
import { useDebounceFn } from '@reactuses/core';

const useMasonry = (scrollContainerRef: React.RefObject<HTMLDivElement>) => {
  // 瀑布流的一些属性
  const masonryOption = useRef({
    loading: false,
    bottomDistance: 5
  });

  const backTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    })
  }

  const calcItemHeight = (item: ItemOption, itemWidth: number) => {
    let height = 0
    // 当包含图文时，需要单独计算文字部分的高度
    // 文字部分的高度 + 图片的高度 = 真实高度
    // 这里可以根据是否只显示图片的条件来控制
    height = 84;
    return item.height * (itemWidth / item.width) + height
  }

  const [data, setData] = useState<PageProps>({
    page: 0,
    size: 10,
    total: 0,
    max: 0,
    list: [] as ItemOption[],
    end: false
  });

  // 加载更多数据的函数
  const loadData = async () => {
    if (data.end || masonryOption.current.loading) return;
    const nextPage = data.page + 1;
    const response = await fetch(`https://mock.tatakai.top/images?page=${nextPage}&size=${data.size}&mode=simple`);
    const result = await response.json();

    if (!result.list.length) {
      setData(prevData => ({ ...prevData, page: nextPage, end: true }));
    } else {
      setData(prevData => ({
          ...prevData,
          page: nextPage,
          total: result.total,
          max: result.max,
          list: [...prevData.list,...result.list]
      }));
    }   
    masonryOption.current.loading = true;
  }; 

  // 检查滚动位置，如果距离底部不足一定距离，则加载更多数据
  const checkScrollPosition = async () => {
    if (masonryOption.current.loading) {
        return
    }
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

    // 不大于最小底部距离就加载更多
    if (distanceFromBottom <= masonryOption.current.bottomDistance) {
      masonryOption.current.loading = true;
      await loadData();
      masonryOption.current.loading = false;
    }
  };

  //加一个防抖，防止频繁触发
  const { run } = useDebounceFn(checkScrollPosition, 200);

  useEffect(() => {
    loadData();

    // window.addEventListener('scroll', run);
    // return () => {
    //   window.removeEventListener('scroll', run);
    // };
  },[data]);

  return {
    data, 
    calcItemHeight,
    backTop
  };
};

export default useMasonry;

