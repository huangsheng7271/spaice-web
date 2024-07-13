"use client"

import React, { useState } from 'react';
import ZagTooltip from "@/components/ui/Tooltip";
import {Tooltip,Card} from "antd";
import {CircleHelp,House,Gift,ImagePlus} from "lucide-react";

export default function Home() {
    const menuItems = ['首页', '活动','图片生成'];
    const [activeItem, setActiveItem] = useState(menuItems[0]);

    const iconMap:{
        [key: string]: React.ReactElement<React.ComponentProps<typeof House>>
    } = {
        "首页": <House width={20} style={{marginRight:"8px"}}/>,
        "活动":<Gift width={20} style={{marginRight:"8px"}}/>,
        "图片生成": <ImagePlus width={20} style={{marginRight:"8px"}}/>
    };

    const handleClick = (item:string) => {
        setActiveItem(item);
    };

    return (
        <div className="h-full">
            <div className="h-full flex-column">
                <div className="flex-1">
                    <aside className="sidebar">
                        <div className="sidebar-content">
                            <div className="sidebar-inner">
                                <div className="button-container">
                                    {menuItems.map((item) => (
                                        <button
                                            key={item}
                                            className={`sidebar-button ${activeItem === item ? 'active-button' : ''}`}
                                            onClick={() => handleClick(item)}
                                        >
                                            {iconMap[item]}
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                    <header className="header">
                        <div className="header-container">
                            <div className="header-right">
                                <Tooltip
                                    title="开通会员 每日额外赠送1000积分"
                                    color={"#2f343e"}>
                                    <button className="outline-button" style={{
                                        borderRadius: "24px",
                                        borderWidth: "1px",
                                        marginRight: "6px",
                                        backgroundColor: "rgba(254 243 199)",
                                        boxShadow: "0 0 0 0px rgba(0, 0, 0, 0)",
                                        borderColor: "rgba(253 230 138 / 0.2)",
                                        color: "rgb(180 83 9)",
                                        padding: "2px 12px",
                                    }}>
                                        <Gift width={20} style={{marginRight: "8px"}}/>
                                        开通会员 获赠积分
                                    </button>
                                </Tooltip>
                                <div className="avatar-container">
                                    <span className="avatar" role="button">
                                        <img
                                            src="https://lh3.googleusercontent.com/a/ACg8ocIVKR6dfkxilLJlJkVfO4fZox5OmSESxdFO5KNw3gd2d2pIFBI=s96-c"
                                            alt="黄胜" className="avatar-image"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="content">
                        <div className="max-w-screen-xl">
                            <div className="content-inner">
                                <div className="category-group">
                                    <button className="outline-button">热门</button>
                                    <button className="outline-button">国风美学</button>
                                    <button className="outline-button">动漫游戏</button>
                                    <button className="outline-button">未来科幻</button>
                                    <button className="outline-button">动物萌宠</button>
                                    <button className="outline-button">绘本插画</button>
                                    <button className="outline-button">写实人像</button>
                                    <button className="outline-button">产品设计</button>
                                    <button className="outline-button">3D 艺术</button>
                                </div>
                            </div>
                        </div>
                        {/*<Card bordered={false} style={{width: 1000, height: 700, margin: 270}}>
                            <ZagTooltip title="I am ZagTooltip" color={"#2f343e"}>
                                <button className="outline-button">Hover me</button>
                            </ZagTooltip>
                            <Tooltip
                                title="资深广告专家，以创新、沟通、策划、设计、文案、媒体知识、数据分析和项目管理等多方面的卓越能力享誉业内，能够为用户提供最前沿的广告策略和执行方案。"
                                color={"#2f343e"}>
                                <CircleHelp size={20} className="helpIcon"/>
                                <button className="outline-button">Hover me</button>
                            </Tooltip>
                        </Card>*/}
                    </main>
                </div>
            </div>


            <style jsx>{`
                .h-full {
                    height: 100%;
                }

                .flex-1 {
                    flex: 1;
                }

                .flex-column {
                    display: flex;
                    flex-direction: column;
                }

                .content {
                    padding-left: 16rem;
                    padding-top: 72px;
                }

                .max-w-screen-xl {
                    max-width: 1280px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .content-inner {
                    padding: 0.5rem 1.5rem;
                }

                .category-group {
                    padding-bottom: .5rem;
                    overflow-x: auto;
                    column-gap: .5rem;
                    align-items: center;
                    display: flex;
                }

                .sidebar {
                    display: none;
                    height: 100%;
                    width: 256px;
                    flex-direction: column;
                    position: fixed;
                    top: 16;
                    bottom: 0;
                    z-index: 48;
                }

                .sidebar-content {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color: white;
                    /*background-color: rgb(249 250 251);*/
                    overflow-y: auto;

                    border-radius: 8px;
                    margin: 4px;
                    /*border: 1px solid #f3f4f5;*/
                    box-shadow: 0 0 4px -2px rgba(0, 0, 0, 0.1);
                }

                .sidebar-inner {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    flex: 1;
                }


                .button-container {
                    display: flex;
                    flex-direction: column;
                    padding: .75rem;
                }

                .button-container > * + * {
                    margin-top: 6px;
                }

                .sidebar-button {
                    display: flex;
                    width: 100%;
                    height: 40px; /* Adjust the height as needed */
                    font-size: 14px;
                    align-items: center;
                    padding: 12px 12px;
                    border-radius: 8px;
                    transition: background-color 0.3s ease-out, color 0.2s ease-out;
                    cursor: pointer;
                    border: none;
                    background: none;
                    text-align: left;
                    font-family: inherit;
                    color: #6b7280;
                }

                .sidebar-button:hover {
                    background-color: rgb(236, 238, 240);
                }

                .active-button {
                    background-color: rgb(236, 238, 240);
                    color: #1f2937;
                    font-weight: 500;
                }

                @media (min-width: 1024px) {
                    .sidebar {
                        display: flex;
                    }
                }

                .helpIcon {
                    color: #333;
                    transition: color 0.2s ease-out;
                }

                .helpIcon:hover {
                    color: #767676;
                }

                .outline-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    white-space: nowrap;
                    border-radius: 0.375rem;
                    font-size: 0.875rem;
                    font-weight: 500;
                    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    transition-duration: 150ms;
                    background-color: var(--background);
                    border: 1px solid var(--input);
                    color: var(--foreground);
                    padding: 0.5rem 1rem;

                    box-shadow: 0 0 6px -2px rgba(0, 0, 0, 0.1);
                }

                .outline-button:hover {
                    background-color: var(--accent);
                    color: var(--accent-foreground);
                }

                .outline-button:focus-visible {
                    outline: 2px solid transparent;
                    outline-offset: 2px;
                    box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--ring);
                }

                .outline-button:disabled {
                    pointer-events: none;
                    opacity: 0.5;
                }


                /* 容器样式 */
                .header {
                    height: 72px;
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    /*width: calc(100% - 256px);*/
                    width: 100%;
                    z-index: 49;
                }

                /* 内部div样式 */
                .header-container {
                    padding: 1rem;
                    height: 100%;
                    display: flex;
                    column-gap: 1rem;
                    align-items: center;
                     background-color: rgb(249 250 251 / 1);
                    /*background-color: white;*/
                }

                /* 右侧元素容器 */
                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-left: auto;
                }

                /* 头像容器 */
                .avatar-container {
                    position: relative;
                    display: inline-flex;
                    flex-shrink: 0;
                }

                /* 头像样式 */
                .avatar {
                    position: relative;
                    display: flex;
                    flex-shrink: 0;
                    overflow: hidden;
                    border-radius: 9999px;
                    height: 36px;
                    width: 36px;
                }

                /* 头像图片样式 */
                .avatar img {
                    aspect-ratio: 1 / 1;
                    height: 100%;
                    width: 100%;
                }

                .user-center {
                    border: 1px solid rgba(184, 221, 255, .5);
                    border-radius: 16px;
                    color: rgba(224, 245, 255, .6);
                    flex-direction: row;
                    gap: 16px;
                    align-items: center;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                }

                .creditWrapper {
                    align-items: center;
                    border: .5px solid rgba(184, 221, 255, .12);
                    border-radius: 16px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    height: 32px;
                    overflow: hidden;
                }

                .vipTagWrapper {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    height: 100%;
                    padding: 0 14px 0 8px;
                }

                .container {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    gap: 4px;
                }

                .container .vipText {
                    background-clip: text;
                    /* background-image: linear-gradient(91deg, #00e6ff .28%, #6ee4f5 54.13%, #01b2db);*/
                    color: transparent;
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 18px;
                }
            `}</style>
        </div>
    );
}
