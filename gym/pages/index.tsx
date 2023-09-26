import React from 'react'
import BestAll from './src/component/middle/bestAll/bestAll'
import BestTop from './src/component/middle/bestTop/bestTop'
import BestBottom from './src/component/middle/bestBottom/bestBottom'
import Announcement from './src/component/header/announceMent/announcement'
import bestall from './api/bestall'
import besttop from './api/besttop'
import bestbottom from './api/bestbottom'
import { gymWearItem } from '@/src/type/gymwear'
import PcHeader from './src/component/header/pc/pcHeader'
import PcMain from './src/component/middle/pc/pcMain'
import PcAnnounce from './src/component/header/pc/pcAnnounce'
import PcHeaderMargin from './src/component/header/pc/pcHeaderMargin'
import PcSearchModal from './src/component/header/pc/pcSearchModal'
interface mainPageItemPropsType {
    bestTopItem:[]
    bestAllItem:[]
    bestBottomItem:[]
}
export const getStaticProps = async () => {
   const getAllItem= await bestall()
   const convertJSONAll:gymWearItem = JSON.parse(getAllItem)
   const getTopItem= await besttop()
   const convertJSONTop:gymWearItem = JSON.parse(getTopItem)
   const getBottomItem= await bestbottom()
   const convertJSONBottom:gymWearItem = JSON.parse(getBottomItem)
    return { 
        props: { 
            bestAllItem:convertJSONAll?convertJSONAll:null,
            bestTopItem:convertJSONTop?convertJSONTop:null,
            bestBottomItem:convertJSONBottom?convertJSONBottom:null 
             } 
        };
    
    
};
const Index = ({bestTopItem,bestAllItem,bestBottomItem}:mainPageItemPropsType)=>{
    return(
        <div
        style={{
            overscrollBehavior:"none"
        }}>
            {/* <Announcement/> */}
            {/* <BestAll gymitem={bestAllItem}/> */}
            {/* <BestTop gymitem={bestTopItem}/> */}
            {/* <BestBottom gymitem={bestBottomItem}/> */}
            
            {/* <PcSearchModal/> */}
            {/* <PcAnnounce/> */}
            <PcMain/>
        </div>
    )
}



export default Index;