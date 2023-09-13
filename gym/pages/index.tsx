import React from 'react'
import BestAll from './src/component/middle/bestAll/bestAll'
import BestTop from './src/component/middle/bestTop/bestTop'
import BestBottom from './src/component/middle/bestBottom/bestBottom'
import Announcement from './src/component/header/announceMent/announcement'
import { gymWearItem } from '@/src/type/gymwear'

interface mainPageItemPropsType {
    bestTopItem:[]
    bestAllItem:[]
    bestBottomItem:[]
}
export const getStaticProps = async () => {
    try {
        const response1 = await fetch("127.0.0.1/api/besttop");
        const resBestTop = await response1.json();
        const response2 = await fetch("127.0.0.1/api/bestall");
        const resBestAll = await response2.json();
        const response3 = await fetch("127.0.0.1/api/bestbottom");
        const resBestBottom = await response3.json();
        return { 
            props: { 
                bestTopItem:resBestTop,
                bestAllItem:resBestAll,
                bestBottomItem:resBestBottom,
                 } 
            };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { res: [] } }; // 혹은 빈 배열 등의 기본값으로 처리
    }
};
const index = ({bestTopItem,bestAllItem,bestBottomItem}:mainPageItemPropsType)=>{
    return(
        <div
        style={{
            overscrollBehavior:"none"
        }}>
            <Announcement/>
            <BestAll gymitem={bestAllItem}/>
            <BestTop gymitem={bestTopItem}/>
            <BestBottom gymitem={bestBottomItem}/>
        </div>
    )
}



export default index;