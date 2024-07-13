"use client"

import {Logo} from "@/components/ui/logo"
import { Gift } from 'lucide-react';

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
                            <div className="header-right">
                                <div data-id="Home"></div>
                                <div data-id="Explore"></div>
                                <div data-id="TitleBarAppDownload"></div>
                                <div data-id="TitleBarUserCenter">
                                    <div>
                                        <div className="signIn">
                                            <div className="creditWrapper-PSYIae" style={{pointerEvents: "all"}}>
                                                <div className="creditWrapper-tkz5hQ">
                                                    <div className="credit-CIfJTE">
                                                        <Gift size={15} color={"#5ddbf1"}></Gift>
                                                        <span className="creditText-b7y6Yt">64</span>
                                                    </div>
                                                </div>
                                                <div className="divider-eDOiGM"></div>
                                                <div className="vipTagWrapper-YymsES">
                                                    <div className="container-FVv4CA">
                                                        <div className="vipText-FaRrFY">开会员 得积分</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container-sRuVWo">
                                                <div>
                                                    <div className="avatarContainer-hvVBTI">
                                                        <div className="avatar-snVMmj">
                                                            <div
                                                                className="container-NcFomj avatar-tGQBEA avatarHover-TOKjXN">
                                                                <div style={{transition: "opacity 300ms ease 0s",opacity: 1}}>
                                                                    <img className="image-mcNK02"
                                                                         src="https://p3-passport.byteacctimg.com/img/user-avatar/6320dc40314aea75830e937d5b647d62~300x300.image"
                                                                         draggable="false" crossOrigin="anonymous"/>
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
                .platform-ui-service-header-container .header-right {
                    flex-wrap: nowrap;
                    justify-content: flex-end;
                }
                .signIn {
                    border: 1px solid var(--line-level-3);
                    border-radius: 8px;
                    color: var(--text-tertiary);
                    flex-direction: row;
                    gap: 16px;
                }
                .favorite, .signIn {
                    align-items: center;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                }
                .creditWrapper-PSYIae {
                    align-items: center;
                    border: .5px solid var(--line-2);
                    border-radius: 16px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    height: 32px;
                    overflow: hidden;
                }
                .creditWrapper-tkz5hQ {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    height: 100%;
                    padding: 0 8px;
                    transition: background-color 0.2s ease-in-out;
                }
                .creditWrapper-tkz5hQ:hover {
                    background-color: hsla(0, 0%, 100%, .08);
                }
                .credit-CIfJTE {
                    align-items: center;
                    display: flex;
                    gap: 4px;
                }
                .credit-CIfJTE .creditText-b7y6Yt {
                    color: #5ddbf1;
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 20px;
                }
                .creditWrapper-PSYIae .divider-eDOiGM {
                    background-color: var(--line-2);
                    height: 11px;
                    width: 1px;
                }
                .vipTagWrapper-YymsES {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    height: 100%;
                    padding: 0px 14px 0px 8px;
                    transition: background-color 0.2s ease-in-out;
                }
                .vipTagWrapper-YymsES:hover {
                    background-color: rgba(255, 255, 255, 0.08);
                }
                .container-FVv4CA {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    gap: 4px;
                }
                .container-FVv4CA .vipText-FaRrFY {
                    background-clip: text;
                    -webkit-background-clip: text;
                    background-image: linear-gradient(91deg, #00e6ff .28%, #6ee4f5 54.13%, #01b2db);
                    color: transparent;
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 18px;
                }
                .container-sRuVWo {
                    position: relative;
                }
                .signIn .avatarContainer-hvVBTI {
                    align-items: center;
                    box-sizing: border-box;
                    cursor: pointer;
                    display: flex;
                    gap: 10px;
                    position: relative;
                }
                .signIn .avatarContainer-hvVBTI .avatar-snVMmj {
                    height: 32px;
                    width: 32px;
                }
                .avatar-tGQBEA {
                    border-radius: 50%;
                    height: 100%;
                    width: 100%;
                }
                .container-NcFomj {
                    height: 100%;
                    position: relative;
                    width: 100%;
                }
                .container-NcFomj .image-mcNK02 {
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    transition: opacity .1s ease;
                    width: 100%;
                }

                .avatar-tGQBEA img {
                    border-radius: 50%;
                    object-fit: cover;
                }
                img {
                    border-style: none;
                }

            `}</style>
        </div>
    );
}
