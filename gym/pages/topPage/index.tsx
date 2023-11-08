import React, { useState, useRef, useEffect, useContext } from 'react';
import type { gymWearItem, GymItemProps } from '@/src/type/gymwear';
import { GetServerSidePropsContext } from 'next';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Mobile from '../../src/component/middle/mobile/top/moblie'
import Pc from '../../src/component/middle/pc/PcTop/pc'

type getTopItem={
    gymitem:[]
    countresult:number
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { sort,page } = context.query;
    const res = await fetch(`http://localhost:3000/api/toppage?sort=${sort}&page=${page}`);
    const data = await res.json();
    
    return { 
        props: { 
        gymitem:data.result,
        countresult:data.countresult[0].C
        }
     };
  }
  const Index = (props:getTopItem) => {
    return(
    <div>
        {isBrowser && <Pc gymitem={props.gymitem} countresult={props.countresult}/>}
        {isMobile &&  <Mobile gymitem={props.gymitem}/>}
        
    </div>
    )
    
    
}
export default Index
