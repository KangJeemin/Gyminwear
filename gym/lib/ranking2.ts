import { off } from "process";

type CalulateRankingArray = number
type RankingArray = number | string

export default function ranking(yesterdayArray: CalulateRankingArray[], todayArray: any[]) {

    const sortYesterdayArray = [...yesterdayArray].sort((a, b) => a - b);
    const sortTodayArray = [...todayArray].sort((a, b) => a - b);
    const returnArray:any=[]
    const todayBrandRankArray:CalulateRankingArray[]=[1,2,3,4,5,6,7,8,9,10]
    const returnArray2:any=[]
    const arrangeArray:any=[]
    for(let i=0; i<todayArray.length;i++){
        arrangeArray.push([todayArray[i]])
    }

    // 2차원 배열의 형식으로 todayArray를 만듬.
    const trueArray: any[][] = [];
    for (let i = 0; i < sortTodayArray.length; i++) {
        trueArray.push([sortTodayArray[i]]);
    }
    
    let count=0;

    // 오름 차순으로 정렬된 오늘의 배열과 내일의 배열을 비교하여 오늘의 배열의 2차 배열 원소 값에 true Or fasle 주입.
    for (let i = 0; i < todayArray.length; i++) {
        for (let j = count; j < yesterdayArray.length; j++) {
            if (sortTodayArray[i] === sortYesterdayArray[j]) {
                count=j;
                trueArray[i].push(true)
                break;

            } else {
                if (j === 9) {
                    trueArray[i].push(false)
                    break;
                }
                else{
                    continue
                }
            }
        }
    }


    // 오늘의 배열을 2차원 배열로 바꿈 (trueArray를 todayArray의 순서와 맞게 재배치 하는 코드)
    trueArray.sort((arr1,arr2)=>{
        const index1 = todayArray.indexOf(arr1[0]);
        const index2 = todayArray.indexOf(arr2[0]);
        return index1 - index2;
    })

    // trueArray의 두번쨰 원소가 true일 경우, 어제의 배열이 몇번쨰에 있는지 비교하고 false일 경우 100을 넣음
    for(let i=0;i<10;i++){
        if(trueArray[i][1]){
            for(let j=0;j<10;j++){
                if(trueArray[i][0]===yesterdayArray[j]){
                    returnArray.push(j+1);
                    break;
                }
            }
        }
        else{
            returnArray.push(100)
        }
        
    }

    // 어제의 배열과 오늘의 배열간의 등수 차이를 계산, 100일 경우에는 new를 넣음
    for(let i=0;i<10;i++){
        if(returnArray[i]===100){
            returnArray2.push("new")    
        }
        else{
            returnArray2.push(returnArray[i]-todayBrandRankArray[i])
        }
        
    }
    
    return returnArray2;
}
