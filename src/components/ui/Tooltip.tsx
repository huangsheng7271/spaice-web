"use client"

import React, { useId } from "react";
import CSSMotion from 'rc-motion';
import * as tooltip from "@zag-js/tooltip"
import { useMachine, normalizeProps } from "@zag-js/react"

interface ZagTooltipProps {
    children: React.ReactNode;
    color?: string;
    title?: string;
}

const ZagTooltip: React.FC<ZagTooltipProps> = ({ children,color,title }) =>{
    const [state, send] = useMachine(tooltip.machine({
        id: useId(),
        openDelay:100,
        closeDelay:100,
        closeOnPointerDown:false,
        positioning: {
            placement: "top",
            strategy: "absolute",
            gutter:12
        }
    }))
    const api = tooltip.connect(state, send, normalizeProps)
    const bgColor = color || 'rgba(0, 0, 0, 0.85)';

    return (
        <div>
            {React.isValidElement(children) ? React.cloneElement(children, api.getTriggerProps()) : <>{children}</>}
            {title && (
                <div {...api.getPositionerProps()}>
                    <CSSMotion visible={api.open} motionName="zoom-big-fast" removeOnLeave={true}>
                        {({className, style}) => (
                            <div className={`ant-tooltip ${className || ''}`} style={style}>
                                <div className="ant-tooltip-arrow"></div>
                                <div {...api.getContentProps()} className="ant-tooltip-content" hidden={false}>
                                    <div className="ant-tooltip-inner">
                                        {title}
                                    </div>
                                </div>
                            </div>
                        )}
                    </CSSMotion>
                </div>
            )}

            <style jsx>{`
                .ant-tooltip {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    color: rgba(0, 0, 0, 0.88);
                    font-size: 14px;
                    line-height: 1.5714285714285714;
                    list-style: none;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
                    /*position: absolute;*/
                    z-index: 1070;
                    display: block;
                    width: max-content;
                    max-width: 250px;
                    visibility: visible;
                    transform-origin: var(--arrow-x, 50%) var(--arrow-y, 50%);
                    --antd-arrow-background-color: ${bgColor};
                }

                .ant-tooltip-content {
                    position: relative;
                }

                .ant-tooltip-inner {
                    min-width: 1em;
                    min-height: 32px;
                    padding: 6px 8px;
                    color: #fff;
                    text-align: start;
                    text-decoration: none;
                    word-wrap: break-word;
                    background-color: ${bgColor};
                    border-radius: 6px;
                    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
                    box-sizing: border-box;
                }
                
                .ant-tooltip-arrow {
                    bottom: 0;
                    transform: translateY(100%) rotate(180deg);
                }
                .ant-tooltip-arrow {
                    left: 50%;
                    transform: translateX(-50%) translateY(100%) rotate(180deg);
                }

                .ant-tooltip-arrow {
                    position: absolute;
                    z-index: 1;
                    display: block;
                    pointer-events: none;
                    width: var(--ant-size-popup-arrow);
                    height: var(--ant-size-popup-arrow);
                    overflow: hidden;
                }

                .ant-tooltip-arrow::before {
                    position: absolute;
                    bottom: 0;
                    inset-inline-start: 0;
                    width: 16px;
                    height: 8px;
                    background: var(--antd-arrow-background-color);
                    clip-path: polygon(1.6568542494923806px 100%, 50% 1.6568542494923806px, 14.34314575050762px 100%, 1.6568542494923806px 100%);
                    clip-path: path('M 0 8 A 4 4 0 0 0 2.82842712474619 6.82842712474619 L 6.585786437626905 3.0710678118654755 A 2 2 0 0 1 9.414213562373096 3.0710678118654755 L 13.17157287525381 6.82842712474619 A 4 4 0 0 0 16 8 Z');
                    content: "";
                }
            `}</style>
        </div>
    );
}
export default ZagTooltip;