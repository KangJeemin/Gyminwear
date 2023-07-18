import React from 'react'
import Link from 'next/link'
import Header from './src/component/header/header'
import Middle from './src/component/middle/middle'
import Footer from './src/component/footer/footer'
const main = ()=>{
    return(
        <div>
            <Header/>
            <Link href={"/"}>
                <a>메인 페이지</a>  
            </Link>
            <Middle/>
            <Footer/>
            
            
        </div>
    )
}

export default main;