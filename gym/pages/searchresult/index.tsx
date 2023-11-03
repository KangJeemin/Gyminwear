
import React, { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import type { gymWearItem ,SearchResultProps} from '../../src/type/gymwear';
import { GetServerSideProps,GetServerSidePropsContext } from 'next';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Pc from '../../src/component/middle/pc/pcSearchresult/pc';
import Mobile from '../../src/component/middle/mobile/search/mobile'

type getBottomItem={
    gymitem:[]
    countresult:number
}
interface gymwear{
    data:gymWearItem;
}
const Index = (props:getBottomItem) => { 
return(
    <div>
        {isBrowser && <Pc gymitem={props.gymitem} countresult={props.countresult}/>}
        {isMobile && <Mobile gymitem={props.gymitem} countresult={props.countresult}/>}
    </div>
)
    
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { search, page } = context.query;
    const res = await fetch(`http://localhost:3000/api/search?search=${search}&page=${page}`);
    const data = await res.json();
    return { props: { 
        gymitem:data.result,
        count:data.countresult[0].C
     } };
  }
  

export default Index;

