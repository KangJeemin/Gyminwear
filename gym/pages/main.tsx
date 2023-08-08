import React from 'react'
import Link from 'next/link'
import Header from './src/component/header/header'
import BestAll from './src/component/middle/bestAll/bestAll'
import Footer from './src/component/footer/footer'
import BestTop from './src/component/middle/bestTop/bestTop'
import BestBottom from './src/component/middle/bestBottom/bestBottom'
import HeaderMargin from './src/component/header/headerMargin'
import { useRef } from 'react'

const Main = ()=>{

    const target = useRef<HTMLDivElement | null>(null);
    return(
        <div>
            <Header/>
            <HeaderMargin/>
            <BestAll/>
            <BestTop/>
            <BestBottom/>
        </div>
    )
}

export default Main;