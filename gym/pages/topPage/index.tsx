import React, { useState, useRef, useEffect, useContext } from 'react';
import type { gymWearItem, GymItemProps } from '@/src/type/gymwear';
import { GetServerSidePropsContext } from 'next';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Mobile from './moblie'
import Pc from './pc'

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { page } = context.query;
    const res = await fetch(`http://localhost:3000/api/toppage?page=${page}`);
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
        <BrowserView>
            <Pc gymitem={gymitem}/>
        </BrowserView>
        <MobileView>
            <Mobile gymitem={gymitem}/>
        </MobileView>
    </div>
    )
    
    
}
export default Index
