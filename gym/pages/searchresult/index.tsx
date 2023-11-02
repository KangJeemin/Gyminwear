
import React, { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import type { gymWearItem ,SearchResultProps} from '../../src/type/gymwear';
import { GetServerSideProps,GetServerSidePropsContext } from 'next';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Pc from '../../src/component/middle/pc/pcSearchresult/pc';
import Mobile from '../../src/component/middle/mobile/search/mobile'

interface gymwear{
    data:gymWearItem;
}
const Index = ({item,count}:SearchResultProps) => { 
return(
    <div>
        {isBrowser && <Pc item={item} count={count}/>}
        {isMobile && <Mobile item={item} count={count}/>}
    </div>
)
    
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { search, page } = context.query;
    const res = await fetch(`http://localhost:3000/api/search?search=${search}&page=${page}`);
    const data = await res.json();
    return { props: { 
        item:data.result,
        count:data.countresult[0].C
     } };
  }
  

export default Index;

