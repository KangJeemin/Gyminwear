import React, { useState, useRef, useEffect, useContext } from 'react';
import type { gymWearItem ,GymItemProps} from '@/src/type/gymwear';
import { GetServerSidePropsContext } from 'next';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import PcBottom from './pcBottom';
import MobileBottom from './bottom'

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { page } = context.query;
    const res = await fetch(`http://localhost:3000/api/bottompage?page=${page}`);
    const data = await res.json();
    return { props: { 
        gymitem:data
     } };
  }

const Index= ({gymitem}:GymItemProps) => { 
    return(
        <div>
            {isBrowser &&  <PcBottom gymitem={gymitem} />}
            {isMobile && <MobileBottom gymitem={gymitem}/>}
        </div>
    )
}
export default Index