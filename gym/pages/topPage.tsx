import React from 'react'
import Link from 'next/link'
import Header from './src/component/header/header'
import TopComponent1 from './src/component/middle/topComponent/topComponent1'
import SwipeableTemporaryDrawer from './src/component/header/drawer'
const topPage = () => {
    return (
        
        <div>
        <Header/>
        <TopComponent1/>
        </div>
    )

}

export default topPage;