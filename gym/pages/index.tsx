import React from 'react'
import Link from 'next/link'
const index = ()=>{
    return(
        <div>
          
            <Link href={"/main"}>
                <a>강지민 페이지</a>  
            </Link>
            
        </div>
    )
}

export default index;