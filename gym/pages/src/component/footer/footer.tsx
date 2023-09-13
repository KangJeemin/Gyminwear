import React from 'react'
const footer = ()=>{
    return(
        <div style={{
            width:'100%',
            height:'200px',
            backgroundColor:'#D9D9D9',
            color:'black',
            display:'flex',
            overscrollBehavior:"none"
        }}><div style={{width:'3%'}}></div>
           <div style={{width:'94%',fontSize:'11px',paddingTop:'20px',color:'989898'}}>짐인웨어는 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수 있습니다. 각 상품 페이지에서 구체적인 내용을 확인하여 주십시오.</div>
           <div style={{width:'3%'}}></div>
        </div>
    )
}

export default footer;