import { off } from "process";

type CalulateRankingArray = number
type RankingArray = number | string

export default function ranking(yesterdayArray: CalulateRankingArray[], todayArray: any[]) {

    const sortYesterdayArray = [...yesterdayArray].sort((a, b) => a - b);
    const sortTodayArray = [...todayArray].sort((a, b) => a - b);
    const returnArray:any=[]
    const todayBrandRankArray:CalulateRankingArray[]=[1,2,3,4,5,6,7,8,9,10]
    const returnArray2:any=[]

    // 2차원 배열의 형식으로 todayArray를 만듬.
    const trueArray: any[][] = [];
    for (let i = 0; i < todayArray.length; i++) {
        trueArray.push([todayArray[i]]);
    }
    

    for (let i = 0; i < todayArray.length; i++) {
        for (let j = 0; j < yesterdayArray.length; j++) {
            if (sortTodayArray[i] === sortYesterdayArray[j]) {
                trueArray[i].push(true)
                break;
            } else {
                if (j === 9) {
                    trueArray[i].push(false)
                    break;
                }
            }
        }
    }

    for(let i=0;i<10;i++){
        if(trueArray[i][1]){
            if(trueArray[i][0]===yesterdayArray[i]){
                returnArray.push(i+1);
                break;
            }
                
        }
        else{
            returnArray.push(100)
        }
    }
    console.log('returnArray=',returnArray)
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
