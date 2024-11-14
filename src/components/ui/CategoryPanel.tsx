import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

type CategoryPanelProps = {
  isExpanded: boolean;
  setExpanded: (expanded: boolean) => void;
  itemsHeight: number;
  setItemsHeight: (height: number) => void;
};

export const CategoryPanel = ({
  isExpanded, setExpanded, itemsHeight, setItemsHeight
}: CategoryPanelProps) => {

  const categories = [
    "热门",
    "国风美学",
    "海报设计",
    "插画设计",
    "写实",
    "游戏",
    "摄影",
    "热门1",
    "国风美学1",
    "海报设计1",
    "插画设计1",
    "写实1",
    "游戏1",
    "摄影1",
    "热门2",
    "写实2",
    "国风美学2",
    "海报设计2",
    "插画设计2",
    "游戏2",
    "摄影2",
  ];

  // useState 用于管理选中的标题
  const [selected, setSelected] = useState(categories[0]);
  const itemsRef = useRef<HTMLDivElement>(null);

  //切换展开状态
  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  useEffect(() => {
    if (itemsRef.current) {
      setItemsHeight(itemsRef.current.scrollHeight)
    }
  }, []);

  let categoryAfterTop = -8;
  if (itemsHeight && isExpanded) {
    categoryAfterTop = itemsHeight + 8;
  } else {
    categoryAfterTop = 32 + 8;
  }


  return (
    <>
      <div className="tool category" style={{ top: '52px', width: '1240px' }}>
        <div className="wrap">
          <div className="panelConatiner" style={{ width: '100%' }}>
            <div className="slidingContainerWrapper arrowDisabled" style={{ opacity: 1 }}>
              <div className="slidingContainer arrowDisabled">
                <div ref={itemsRef} className={`items ${isExpanded ? 'expanded' : ''}`}>
                  {categories.map((category) => (
                    <div key={category}
                      className={`panelTitle ${selected === category ? 'selected' : ''}`}
                      onClick={() => setSelected(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {itemsHeight > 32 && (
            <div className="mweb-button-default mwebButton arrow" onClick={toggleExpand}>
              {isExpanded ? (
                <ChevronUp
                  size={20}
                  color='var(--text-secondary)'
                />
              ) : (
                <ChevronDown
                  size={20}
                  color='var(--text-secondary)'
                />
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
            .tool{
                margin-bottom: 16px;
            }
            .category {
                background: var(--background-1);
                margin-bottom: 0;
                padding-bottom: 16px;
                position: sticky;
                z-index: 1;
            }
            .category:before {
                background: var(--background-1);
                content: "";
                height: 1px;
                position: absolute;
                top: -1px;
                width: 100%;
            }
            .category:after {
                border: 8px solid var(--background-1);
                border-bottom-left-radius: 16px;
                border-bottom-right-radius: 16px;
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;
                bottom: -8px;
                content: "";
                height: 100vh;
                left: -8px;
                pointer-events: none;
                position: absolute;
                right: -8px;
                {/*top: -8px;*/}

                top: ${categoryAfterTop}px;
                transition: top 0.2s ease;
            }
            .tool .wrap {
                background: var(--background-1);
                display: flex;
            }
            .tool .panelConatiner {
                position: relative;
                width: calc(100% - 44px);
            }
            .slidingContainerWrapper {
                position: relative;
            }
            .arrowDisabled{

            }
            .slidingContainer {
                overflow: hidden;
                position: relative;
                transition: mask-image 0.2s cubic-bezier(0.34, 0.69, 0.1, 1), -webkit-mask-image 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
            }
            .slidingContainer .items {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
              transition: transform 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
              width: fit-content;
              overflow: hidden;
              height: 32px;
              transition: height 0.2s ease;
            }

            .slidingContainer .expanded {
              height:${itemsHeight}px  
            }

            .tool .selected {
                background: var(--block-pressed) !important;
                color: var(--text-primary) !important;
                font-weight: 500 !important;
            }
            .tool .panelTitle {
                align-items: center;
                background: var(--block-default);
                border: .5px solid var(--line-2);
                border-radius: 6px;
                box-sizing: border-box;
                color: var(--text-tertiary);
                cursor: pointer;
                display: flex;
                font-size: 13px;
                font-weight: 500;
                gap: 10px;
                height: 32px;
                justify-content: center;
                padding: 7px 16px;
                white-space: nowrap;
                word-break: keep-all;
            }
            .tool .panelTitle:hover {
                background: var(--block-hover);
                color: var(--text-secondary);
                cursor: pointer;

                transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
                transition-timing-function: cubic-bezier(.4,0,.2,1);
                transition-duration: .15s;
            }


            {/* 展开按钮部分样式 */}
            .mweb-button-default {
                background: var(--main-default);
                color: var(--background-1);
                cursor: pointer;
                padding: 0 24px;
            }
            .mwebButton {
                align-items: center;
                border-radius: 8px;
                box-sizing: border-box;
                display: flex;
                flex-shrink: 0;
                font-size: 13px;
                font-style: normal;
                font-weight: 600;
                gap: 4px;
                height: 36px;
                justify-content: center;
                position: relative;
                text-align: center;
                transition: background-color .16s ease;
            }
            .tool .arrow {
                background: var(--block-default);
                {/* border: .5px solid var(--line-2); */}
                border-radius: 8px;
                height: 34px;
                margin-left: 8px;
                padding: 0;
                width: 34px;
            }

        `}</style>
    </>

  );
};
