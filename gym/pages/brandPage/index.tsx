import React, { useState, useRef, useEffect, useContext } from 'react';
import type { gymWearItem, GymItemProps } from '@/src/type/gymwear';
import { GetServerSidePropsContext } from 'next';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Mobile from '../../src/component/middle/pc/PcTop/moblie'
import Pc from '../../src/component/middle/pc/PcTop/pc'

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { brandName,sort,page } = context.query;
    const res = await fetch(`http://localhost:3000/api/brandpage?brandName=${brandName}&sort=${sort}&page=${page}`);
    const data = await res.json();
    
    return { 
        props: { 
        gymitem:data
        }
     };
  }
  const Index = ({gymitem}:GymItemProps) => {
    return(
    <div>
        {isBrowser && <Pc gymitem={gymitem}/>}
        {isMobile &&  <Mobile gymitem={gymitem}/>}
        
    </div>
    )
    
    
}
export default Index
