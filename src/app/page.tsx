"use client"

import {Logo} from "@/components/ui/logo"
export default function Home() {

    return (
        <div id="ai-home" className="lv-theme-force_dark">
            <div className="global-mweb-container">
                <div className="root">
                    <div className="top-down-layer mweb-layout-container">
                        <div className="platform-ui-service-header-container mweb-titlebar-logo-container">
                            <div className="header-left">
                                <Logo/>
                            </div>
                            <div className="header-center"></div>
                            <div className="header-right"></div>
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

                .root {
                    height: 100%;
                    overflow: hidden;
                    width: 100%;
                }

                .mweb-layout-container {
                    background: none;
                    height: 100%;
                    min-width: 1024px;
                    width: 100%;
                }

                .container, .top-down-layer {
                    display: flex;
                    height: 100%;
                    overflow: hidden;
                    width: 100%;
                }

                .top-down-layer {
                    flex-direction: column;
                }

                .mweb-layout-container .platform-ui-service-header-container {
                    backdrop-filter: none;
                    -webkit-backdrop-filter: none;
                }

                .platform-ui-service-header-container {
                    align-items: center;
                    -webkit-backdrop-filter: blur(20px);
                    backdrop-filter: blur(20px);
                    background-color: var(--lvv-color-scenes-panel);
                    box-sizing: border-box;
                    display: flex;
                    height: 72px;
                    justify-content: space-between;
                    padding: 10px 40px;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    width: 100%;
                    z-index: 99;
                }

                .platform-ui-service-header-container {
                    height: var(--side-menu-titlebar-height);
                    position: absolute;
                }

                .mweb-titlebar-logo-container {
                    -webkit-backdrop-filter: unset;
                    backdrop-filter: unset;
                    background-color: var(--background-1);
                    padding: 20px 16px 18px 19px;
                }

                .platform-ui-service-header-container .header-left {
                    color: var(--lvv-color-text-primary);
                }

                .platform-ui-service-header-container .header-center, .platform-ui-service-header-container .header-left, .platform-ui-service-header-container .header-right {
                    position: relative;
                }

                .platform-ui-service-header-container .header-left, .platform-ui-service-header-container .header-right, .platform-ui-service-header-container .temp-header-for-calc {
                    align-items: center;
                    box-sizing: border-box;
                    display: flex;
                    flex-wrap: wrap;
                }
            `}</style>
        </div>
    );
}
