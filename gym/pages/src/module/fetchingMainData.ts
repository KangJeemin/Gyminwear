async function getmaindata () {
    try {
        const response1 = await fetch("http://localhost:3000/api/besttop");
        const resBestTop = await response1.json();
        const response2 = await fetch("http://localhost:3000/api/bestall");
        const resBestAll = await response2.json();
        const response3 = await fetch("http://localhost:3000/api/bestbottom");
        const resBestBottom = await response3.json();
        return { 
            props: { 
                bestTopItem:resBestTop,
                bestAllItem:resBestAll,
                bestBottomItem:resBestBottom,
                 } 
            };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { res: [] } }; // 혹은 빈 배열 등의 기본값으로 처리
    }
}

export default getmaindata