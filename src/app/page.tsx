"use client"
import { Tooltip } from "@ark-ui/react";
import {useState} from "react";
import CSSMotion from 'rc-motion';

export default function Home() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className="App">
            <Tooltip.Root openDelay={100} closeDelay={100} open={visible}>
                <Tooltip.Trigger onClick={toggleVisible}>Hover Me</Tooltip.Trigger>
                <Tooltip.Positioner>
                    <CSSMotion
                        visible={visible}
                        motionName="zoom-big-fast"
                        removeOnLeave={false}
                    >
                        {({ className, style }) => (
                            <Tooltip.Content asChild hidden={false}>
                                <div className={`card ${className ? className : ''}`} style={style}>
                                    <Tooltip.Arrow>
                                        <Tooltip.ArrowTip asChild>
                                            <div className="ant-tooltip-arrow"></div>
                                        </Tooltip.ArrowTip>
                                    </Tooltip.Arrow>
                                    I am a tooltip!
                                </div>
                            </Tooltip.Content>
                        )}
                    </CSSMotion>
                </Tooltip.Positioner>
            </Tooltip.Root>

            <style jsx global>{`
                .App {
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }

                [data-scope='tooltip'][data-part='content'] {
                    min-width: 1em;
                    min-height: 32px;
                    padding: calc(24px / 2) 8px;
                    color: #fff;
                    text-align: start;
                    text-decoration: none;
                    word-wrap: break-word;
                    background-color: rgba(0, 0, 0, 0.85);
                    border-radius: 6px;
                    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
