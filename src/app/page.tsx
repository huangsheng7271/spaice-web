"use client"

import { Tooltip,Button} from "antd";
import ZagTooltip from "@/components/ui/Tooltip";

export default function Home() {
    //

    return (
        <div className="App">

            <Tooltip title="I am Tooltip" color={"#2f343e"}>
                <Button type="primary">Hover me</Button>
            </Tooltip>
            <Tooltip title="I am Tooltip" color={"red"}>
                <Button type="primary">Hover me</Button>
            </Tooltip>
            <ZagTooltip title="I am ZagTooltip" color={"#2f343e"}>
                <Button type="primary">Hover me</Button>
            </ZagTooltip>

            <style jsx global>{`
                .App {
                    /* 添加Flexbox布局 */
                    display: flex;
                    /* 居中对齐水平和垂直方向 */
                    justify-content: center;
                    align-items: center;
                    gap: 16px; /* 在Flex项目之间添加间距 */
                    /* 保持全屏高度，可根据需要调整 */
                    height: 100vh;
                }
            `}</style>
        </div>
    );
}
