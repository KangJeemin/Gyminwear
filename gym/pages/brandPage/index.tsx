import React, { useState, useRef, useEffect, useContext } from 'react';
import type { gymWearItem, GymItemProps } from '@/src/type/gymwear';
import { GetServerSidePropsContext } from 'next';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Mobile from '../../src/component/middle/pc/PcTop/moblie'
import Pc from '../../src/component/middle/pc/pcBrand/pcBrand'

type getbrandName={
    brandname:string
    gymitem:[]
    countresult:number
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { brandname,sort,page } = context.query;
    const res = await fetch(`http://localhost:3000/api/brandpage?brandname=${brandname}&sort=${sort}&page=${page}`);
    const data = await res.json();
    
    return { 
        props: { 
        brandname:context.query.brandname,
        gymitem:data.result,
        countresult:data.countresult[0].C
        }
     };
  }
  const Index = (props:getbrandName) => {
    return(
    <div>
        {isBrowser && <Pc gymitem={props.gymitem} brandname={props.brandname} countresult={props.countresult}/>}
        {isMobile &&  <Mobile gymitem={props.gymitem}/>}
        
    </div>
    )
    
    
}
export default Index
