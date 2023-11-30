import React, { useState, useRef, useEffect, useContext } from 'react';
import type { gymWearItem ,GymItemProps} from '@/ver1-files/src/type/gymwear';
import { GetServerSidePropsContext } from 'next';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import PcBottom from '../src/component/middle/pc/pcBottom/pc';
import MobileBottom from '../src/component/middle/mobile/bottom/mobile'

type getBottomItem={
    gymitem:[]
    countresult:number
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { sort,page } = context.query;
    const res = await fetch(`http://localhost:3000/api/bottompage?sort=${sort}&page=${page}`);
    const data = await res.json();
    return { 
        props: { 
        gymitem:data.result,
        countresult:data.countresult[0].C
        }
     };
  }

const Index= (props:getBottomItem) => { 
    return(
        <div>
            {isBrowser && <PcBottom gymitem={props.gymitem} countresult={props.countresult}/>}
            {isMobile && <MobileBottom gymitem={props.gymitem}/>}
        </div>
    )
}
export default Index