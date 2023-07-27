import React from 'react'
import Link from 'next/link'
const index = ()=>{
    return(
        <div>
            <Link href={"/topPage"}>
                <p>강지민 페이지</p>
            </Link>
            
        </div>
    )
}

export default index;