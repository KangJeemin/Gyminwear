import React from 'react'
import Link from 'next/link'
import Header from './src/component/header/header'
import BestAll from './src/component/middle/bestAll/bestAll'
import Footer from './src/component/footer/footer'
import BestTop from './src/component/middle/bestTop/bestTop'
import BestBottom from './src/component/middle/bestBottom/bestBottom'
const main = ()=>{
    return(
        <div>
            <Header/>
            <BestAll/>
            <BestTop/>
            <BestBottom/>
        </div>
    )
}

export default main;