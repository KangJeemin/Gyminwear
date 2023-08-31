import React from 'react'
import Link from 'next/link'
import Header from './src/component/header/header'
import HeaderMargin from './src/component/header/headerMargin'
import TopComponent1 from './src/component/middle/topComponent/topComponent1'
const topPage = () => {
    return (
        
        <div>
        <Header/>
        <HeaderMargin/>
        <TopComponent1/>
        </div>
    )

}

export default topPage;