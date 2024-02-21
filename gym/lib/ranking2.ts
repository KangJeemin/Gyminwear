
type CalulateRankingArray = number
type RankingArray = number | string
/** 브랜드의 어제 대비 오늘 등수를 계산해주는 함수
 * @param {Array} yesterdayArray 전날의 브랜드 순위가 담겨져 있는 배열(10개)
 * @param {Array} todayArray 오늘의 브랜드 순위가 담겨져 있는 배열(10개)  
 * @returns {Array} rankArray 전날 대비 오늘의 브랜드 등수가 담겨있는 배열
 */
export default function ranking (yesterdayArray:CalulateRankingArray[],todayArray:any[]) {


    // 오름 차순으로 정렬.
    const sortYesterdayArray=yesterdayArray.sort((a, b) => a - b);
    const sortTodayArray=todayArray.sort((a, b) => a - b);
    


    // 랭킹 등수 변화를 배열에 담아 반환
    // const rankArray:RankingArray[]=[]
    // 배열에 순서에 브랜드 순위가 비례, 
    // const todayBrandRankArray:CalulateRankingArray[]=[1,2,3,4,5,6,7,8,9,10]

    const trueArray:any[][]=todayArray

    // 오늘 배열과 내일 배열을 오름차순으로 정렬 후 오늘 배열의 값이 내일 배열에 있는지 검사.
    for(let i=0;i<todayArray.length;i++){
        let num=0;
        for(let j=num;j<yesterdayArray.length;j++){
            
            if(sortTodayArray[i]===sortYesterdayArray[j]){
                trueArray[i][j].push(true);
                num=j
                break;   
            }
            else{
                if(j===9){
                    trueArray[i][j].push(false);
                    break;
                }
                continue      
            }
        }
    }

    console.log(todayArray)

    // for (let i=0;i<todayArray.length;i++){
    //     for(let j=0;j<yesterdayArray.length;j++){
    //         //todayArray 배열의 값이 yesterdayArray도 있을 경우 j(몇번쨰 있는지)를 담고 반복문을 종료 그렇지 않을 경우 "new를 담는다"
    //         if(todayArray[i]===yesterdayArray[j]){
    //             trueArray.push(j+1)
    //             break;   
    //         }
    //         else{
    //             if(j===9){
    //                 trueArray.push(100)   
    //                 break;
    //             }
    //             continue      
    //         }
    //     }
    // }

    //todayArray에 있는 배열 요소가 yesterdayArray에는 존재하지 않을 경우, new를 배열에 담음
    // for(let i=0;i<todayBrandRankArray.length;i++){
    //     if(trueArray[i]===100){
    //         rankArray.push("new")
    //     }
    //     else{
    //         // trueArray에는 어제와 오늘 모두 등수에 존재하는 브랜드 중 전날의 순위가 담겨져 있고, todayBrandRankArray에는 오늘의 순위가 들어 있으니, 두 배열을 뺴면 어제 대비 오늘의 등수 차이가 나옴. 
    //         // +1일 경우 어제대비 오늘 1등 상승, -3일 경우 어제대비 오늘 3등 하락
    //         rankArray.push(trueArray[i]-todayBrandRankArray[i]);
    //     }
    // }
}