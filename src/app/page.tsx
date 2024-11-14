"use client"

import { Menu } from "@/components/ui/Menu";
import { Header } from "@/components/ui/Header"
import { CategoryPanel } from "@/components/ui/CategoryPanel";
import { ConfigProvider, Popover, theme } from "antd";
import { useEffect, useRef, useState } from "react";
import Masonry from "@/components/ui/Masonry";
import MasonryItem from "@/components/ui/MasonryItem";
import useMasonry from "@/hooks/useMasonry";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const [isCategoryPanelExpanded, setCategoryPanelExpanded] = useState(false);
  const [categoryPanelHeight, setCategoryPanelHeight] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { data, calcItemHeight, backTop } = useMasonry(scrollContainerRef);

  const content = (
    <div style={{ color: "#FFFFFF", width: "320px", height: "480px" }}>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        "token": {
          "colorBgBase": "#0f1115",
          "colorLink": "#00cae0",
          "colorPrimary": "#00cae0",
          "colorInfo": "#00cae0",
          "colorBgContainer": "#1d2129",
          "colorBgElevated": "#2f343e"
        },
        "components": {
          "Popover": {
            "motionDurationMid": "0.15s",
          }
        },
      }}>
      <div id="csr-root" className="lv-theme-force_dark">
        <div className="global-mweb-container">
          <div className="global-cookie-banner-container"></div>
          <div id="platform" className="root-SLm57d">
            <div className="top-down-layer-Xk7alc mweb-layout-container">
              <Header />
              <div className="container-DHLmlr mvweb-layout-sider-container" >
                <div className="side-menu-o210VM mweb-side-menu-container visible-dctcnn">
                  <div className="menuWrapper-mdM7RQ">
                    <Menu />
                  </div>
                </div>

                <div className="main-container-uAvdVy">
                  <div className="content-cLXL1g mweb-layout-content-container">
                    <div ref={scrollContainerRef} className="scroll-container container-YkXfoZ">
                      <div className="explore-content-GGQIsp">
                        <div className="lv-tabs">
                          <div className="lv-tabs-header-nav"></div>
                          <div className="communityContainer-D0Sdkz">
                            <div className="communityFeedListContainer-xj1ENI">
                              <CategoryPanel
                                isExpanded={isCategoryPanelExpanded} setExpanded={setCategoryPanelExpanded}
                                itemsHeight={categoryPanelHeight} setItemsHeight={setCategoryPanelHeight}
                              />
                              <div style={{opacity: 1, willChange: 'transform', transform: 'none'}}>
                                  <Masonry
                                    items={data.list}
                                    calcItemHeight={calcItemHeight}
                                    >
                                    {(item)=>(
                                      <MasonryItem
                                        item={item}
                                        onlyImage={false}
                                      />
                                    )}
                                  </Masonry> 
                              </div>
                              
                              {/* 
                              <Popover placement="right" content={content} arrow={false} trigger="click">
                                <Button variant={"outline"} >查看更多</Button>
                              </Popover>
                              <div className="feedListNoMoreContainer-ZQIihq feedListNoMoreContainer" style={{ width: '1240px', height: '100vh' }}>
                                更多数据
                              </div> 
                              */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .global-mweb-container {
            display: flex;
            flex-direction: column;
            height: 100vh;
            min-width: 1020px;
            width: 100vw;
          }

          .root-SLm57d {
            height: 100%;
            overflow: hidden;
            width: 100%;
          }

          .container-DHLmlr, .top-down-layer-Xk7alc {
            display: flex;
            height: 100%;
            overflow: hidden;
            width: 100%;
          }

          .top-down-layer-Xk7alc {
            flex-direction: column;
          }

          .mweb-layout-container {
            background: none !important;
            height: 100% !important;
            min-width: 1024px;
            width: 100% !important;
          }

          .mweb-layout-container .mvweb-layout-sider-container {
            background: none !important;
          }

          .container-DHLmlr {
            --side-menu-background: var(--lvv-color-fill-bg-2, #f2f5f7);
            --ui-configuration-side-menu-padding: 0;
            --side-menu-gap: 2px;
            --side-menu-item-padding: 10px 16px;
            --side-menu-padding: 24px 16px;
            --side-menu-split-line-padding: 0 16px;
            background-color: var(--lvv-color-scenes-overlay);
          }

          .container-DHLmlr, .top-down-layer-Xk7alc {
            display: flex;
            height: 100%;
            overflow: hidden;
            width: 100%;
          }

          .side-menu-o210VM.visible-dctcnn {
            padding: var(--side-menu-padding);
            visibility: visible;
            width: var(--side-menu-width);
          }

          .side-menu-o210VM {
            background: var(--side-menu-background);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            height: 100%;
            transition: width .5s cubic-bezier(.075, .82, .165, 1);
            visibility: hidden;
            width: 0;
          }

          .mweb-side-menu-container {
            --side-menu-group-name-width: unset;
            --side-menu-group-name-padding: 2px 16px;
            --side-menu-background: var(--background-1);
            --side-menu-gap: 8px;
            --side-menu-item-padding: 10px;
            --side-menu-padding: 76px 16px 24px 16px;
            --side-menu-width: 254px;
            --ui-configuration-side-menu-padding: 0 0 20px 0;
          }

          .menuWrapper-mdM7RQ {
            flex: 1 1;
            overflow-x: hidden;
            overflow-y: scroll;
            scrollbar-width: none;
          }

          .container-DHLmlr .main-container-uAvdVy {
            box-sizing: border-box;
            display: flex;
            flex: 1 1;
            flex-direction: column;
            height: 100%;
            overflow: hidden;
            position: relative;
            width: 100%;
          }

          .mweb-layout-content-container {
            display: flex;
            justify-content: center;
          }

          .container-DHLmlr .main-container-uAvdVy .content-cLXL1g {
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            width: 100%;
          }

          .scroll-container{
            box-sizing: border-box;
            overflow-x: hidden;
            overflow-y: auto;
            scrollbar-width: auto;
            width: 100%;
          }

          .scroll-container::-webkit-scrollbar-thumb {
            background: transparent;
          }

          .container-YkXfoZ {
            margin-right: 16px;
            padding-top: 24px;
          }
          .container-YkXfoZ {
            margin-right: 2px;
            padding-right: 10px;
            padding-top: 24px;
            scrollbar-width: auto;
          }

          .container-YkXfoZ:after {
            border: 8px solid var(--background-1);
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            bottom: -8px;
            content: "";
            left: -8px;
            pointer-events: none;
            position: absolute;
            right: -8px;
            right: 10px;
            top: -8px;
            top: 68px;
          }

          .communityContainer-D0Sdkz {
            color: var(--text-primary);
          }

          .communityFeedListContainer-xj1ENI {
            position: relative;
          }

          {/* .feedListNoMoreContainer {
            align-items: center;
            color: var(--text-placeholder);
            display: flex;
            font-size: 12px;
            font-weight: 500;
            height: 320px;
            justify-content: center; 
           

            margin-top: ${isCategoryPanelExpanded ? categoryPanelHeight - 32 + 'px' : '0px'};
            transition: margin-top 0.2s ease;
          } */}

          .lv-tabs{
            position: relative;
          }
          .lv-tabs-header-nav {
              box-sizing: border-box;
              height: 32px;
              margin-bottom: 20px;
              pointer-events: none;
              position: -webkit-sticky;
              position: sticky;
              transition: opacity .5s;
              z-index: 200;
          }
        `}</style>
      </div>
    </ConfigProvider>

  );
}

