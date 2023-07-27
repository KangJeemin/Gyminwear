import React from 'react'
import Link from 'next/link'
import Header from './src/component/header/header'
import TopComponent from './src/component/middle/topComponent/topComponent'
import SwipeableTemporaryDrawer from './src/component/header/drawer'
const topPage = () => {
    return (
        <div>
        <Header/>
        <TopComponent/>
        </div>
    )

}

export default topPage