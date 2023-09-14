function getmaindata () {
    try {
        let resBestAll
        fetch("http://localhost:3000/api/bestall").then(res=>res).then(data=>{
            resBestAll=data
        })
        let resBestTop
        fetch("http://localhost:3000/api/besttop").then(res=>res).then(data=>{
            resBestTop=data
        })
        let resBestBottom
        fetch("http://localhost:3000/api/bestbottom").then(res=>res).then(data=>{
            resBestBottom=data
        })

        return{resBestAll,resBestTop,resBestBottom}
    } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { res: [] } }; // 혹은 빈 배열 등의 기본값으로 처리
    }
}

export default getmaindata