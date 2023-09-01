import React from 'react'
import Link from 'next/link'
import Header from './src/component/header/header'
import HeaderMargin from './src/component/header/headerMargin'
import BottomComponent from './src/component/middle/bottomComponent/bottomComponent'
const bottomPage = () => {
    return (
        
        <div>
        <Header/>
        <HeaderMargin/>
        <BottomComponent/>
        </div>
    )

}

export default bottomPage;