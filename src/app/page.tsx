"use client"

import ZagTooltip from "@/components/ui/Tooltip";
import { Tooltip } from "antd";
import {CircleHelp} from "lucide-react";


export default function Home() {

    return (
        <div className="h-full">
            <div className="h-full flex-column">
                <div className="flex-1">
                    <div className="sidebar">
                        <div className="sidebar-content">
                            <div className="sidebar-inner">
                                <div className="button-container">
                                    <button className="sidebar-button active-button">Browse</button>
                                    <button className="sidebar-button inactive-button">Newsletter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ZagTooltip title="I am ZagTooltip" color={"#2f343e"}>
                <button className="outline-button">Hover me</button>
            </ZagTooltip>
            <Tooltip
                title="资深广告专家，以创新、沟通、策划、设计、文案、媒体知识、数据分析和项目管理等多方面的卓越能力享誉业内，能够为用户提供最前沿的广告策略和执行方案。"
                color={"#2f343e"}>
                <CircleHelp size={20} className="helpIcon"/>
            </Tooltip>
            */}


            <style jsx global>{`
                .h-full {
                    height: 100%;
                }

                .flex-column {
                    display: flex;
                    flex-direction: column;
                }

                .flex-1 {
                    flex: 1;
                }

                .sidebar {
                    display: none;
                    height: 100%;
                    width: 268px;
                    flex-direction: column;
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    z-index: 48;
                }

                .sidebar-content {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color: white;
                    overflow-y: auto;
                    border-right-width: 1px;
                    
                    margin: 6px;
                    border-radius: 8px;
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
                    transition: background-color 0.3s;
                    cursor: pointer;
                    border: none;
                    background: none;
                    text-align: left;
                    font-family: inherit;
                }

                .sidebar-button:hover {
                    background-color: #f3f4f6;
                }

                .active-button {
                    background-color: #f3f4f6;
                    color: #1f2937;
                    font-weight: 500;
                }

                .inactive-button {
                    color: #6b7280;
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
            `}</style>
        </div>
    );
}
