import React from 'react'
import BestAll from './src/component/middle/bestAll/bestAll'
import BestTop from './src/component/middle/bestTop/bestTop'
import BestBottom from './src/component/middle/bestBottom/bestBottom'
import Announcement from './src/component/header/announceMent/announcement'
import bestall from './src/module/bestall'
import { gymWearItem } from '@/src/type/gymwear'

interface getmaindataFetching{
    resBestAll:[]
    resBestTop:[]
    resBestBottom:[]
}
interface mainPageItemPropsType {
    bestTopItem:[]
    bestAllItem:[]
    bestBottomItem:[]
}
export const getStaticProps = async () => {
   const getAllItem:any=await bestall()
   console.log('getAllItem=',getAllItem)
    return { 
        props: { 
            bestAllItem:getAllItem?getAllItem:null 
             } 
        };
    
    
};
const Index = ({bestTopItem,bestAllItem,bestBottomItem}:mainPageItemPropsType)=>{
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



export default Index;