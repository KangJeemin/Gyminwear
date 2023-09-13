import React from 'react'
import BestAll from './src/component/middle/bestAll/bestAll'
import BestTop from './src/component/middle/bestTop/bestTop'
import BestBottom from './src/component/middle/bestBottom/bestBottom'
import Announcement from './src/component/header/announceMent/announcement'

export const getStaticProps = async (context: any) => {
    try {
        const response = await fetch(`http://localhost:3000/api/besttop`);
        const res = await response.json();
        await console.log(res) 
        return { 
            props: { 
                gymitem:res.result[0]
                 } 
            };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { res: [] } }; // 혹은 빈 배열 등의 기본값으로 처리
    }
};
const index = ({gymitem}:any)=>{
    return(
        <div
        style={{
            overscrollBehavior:"none"
        }}>
            <Announcement/>
            <BestAll/>
            <BestTop gymitem={gymitem}/>
            <BestBottom/>
        </div>
    )
}



export default index;