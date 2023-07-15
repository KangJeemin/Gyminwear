import React from 'react'
import Link from 'next/link'
import Header from './src/component/header'
const main = ()=>{
    return(
        <div>
            <Header></Header>
            <Link href={"/"}>
                <a>메인 페이지</a>  
            </Link>
            
        </div>
    )
}

export default main;