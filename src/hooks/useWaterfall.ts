import { ItemOption } from "@/types/ItemOption";
import { useState } from "react";

const useWaterfall = () => {
    const [data, setData] = useState({
        page: 0,
        size: 30,
        total: 0,
        max: 0,
        list: [] as ItemOption[],
        end: false
    });
    
    // 加载更多数据的函数
    const loadData = async () => {
        if (data.end) return;
        
        const response = await fetch(`https://mock.tatakai.top/images?page=${data.page + 1}&size=${data.size}&mode=simple`);
        const result = await response.json();

        if (!result.list.length) {
            setData(prevData => ({ ...prevData, end: true }));
        } else {
            setData(prevData => ({
                ...prevData,
                page: prevData.page + 1,
                total: result.total,
                max: result.max,
                list: [...prevData.list, ...result.list]
            }));
        }
    };

    const backTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })
    }

    return {
        backTop,
    }
}

export default useWaterfall;
