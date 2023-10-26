import React from 'react'
import BestAll from '../src/component/middle/mobile/bestAll/bestAll'
import BestTop from '../src/component/middle/mobile/bestTop/bestTop'
import BestBottom from '../src/component/middle/mobile/bestBottom/bestBottom'
import Announcement from '../src/component/header/moblie/announceMent/announcement'
import bestall from './api/bestall'
import besttop from './api/besttop'
import bestbottom from './api/bestbottom'
import pcbestall from './api/pcbestall'
import pcrecent from './api/pcrecent'
import { gymWearItem } from '@/src/type/gymwear'
import PcMain from '../src/component/middle/pc/pcMain/pcMain'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


interface mainPageItemPropsType {
    bestTopItem:[]
    bestAllItem:[]
    bestBottomItem:[]
    bestPcAllItem:[]
    bestPcRecentItem:[]
}

export const getStaticProps = async () => {
   const getAllItem= await bestall()
   const convertJSONAll:gymWearItem = JSON.parse(getAllItem)
   const getTopItem= await besttop()
   const convertJSONTop:gymWearItem = JSON.parse(getTopItem)
   const getBottomItem= await bestbottom()
   const convertJSONBottom:gymWearItem = JSON.parse(getBottomItem)
   const getPcAllItem= await pcbestall()
   const convertJSONPcAll:gymWearItem =JSON.parse(getPcAllItem)
   const getPcRecentItem= await pcrecent()
   const convertJSONPcRecent:gymWearItem =JSON.parse(getPcRecentItem)
    return { 

        props: { 
            bestAllItem:convertJSONAll?convertJSONAll:null,
            bestTopItem:convertJSONTop?convertJSONTop:null,
            bestBottomItem:convertJSONBottom?convertJSONBottom:null,
            bestPcAllItem:convertJSONPcAll?convertJSONPcAll:null,
            bestPcRecentItem:convertJSONPcRecent?convertJSONPcRecent:null,
             } 
        };
    
    
};
const Index = ({bestTopItem,bestAllItem,bestBottomItem,bestPcAllItem,bestPcRecentItem}:mainPageItemPropsType)=>{
    return(
        <div
        style={{
            overscrollBehavior:"none"
        }}>
        {isBrowser && (<PcMain gymitem={bestPcAllItem} gymitem2={bestPcRecentItem}/>)}
        {isMobile && (
            <div>
              {/* <Announcement/> */}
              <BestAll gymitem={bestAllItem}/>
              <BestTop gymitem={bestTopItem}/>
              <BestBottom gymitem={bestBottomItem}/>
            </div>
        )}
        </div>
    )
}



export default Index;