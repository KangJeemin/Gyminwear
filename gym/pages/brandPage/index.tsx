import React, { useState, useRef, useEffect, useContext } from 'react';
import type { gymWearItem, GymItemProps } from '@/src/type/gymwear';
import { GetServerSidePropsContext } from 'next';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Mobile from '../../src/component/middle/pc/PcTop/moblie'
import Pc from '../../src/component/middle/pc/pcBrand/pcBrand'

type getbrandName={
    brandname:string
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { brandname,sort,page } = context.query;
    console.log("query=",context.query)
    const res = await fetch(`http://localhost:3000/api/brandpage?brandname=${brandname}&sort=${sort}&page=${page}`);
    const data = await res.json();
    
    return { 
        props: { 
        brandname:context.query.brandname,
        gymitem:data
        }
     };
  }
  const Index = ({gymitem}:GymItemProps,{brandname}:getbrandName) => {
    return(
    <div>
        {isBrowser && <Pc gymitem={gymitem} brandname={brandname}/>}
        {isMobile &&  <Mobile gymitem={gymitem}/>}
        
    </div>
    )
    
    
}
export default Index
