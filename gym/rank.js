
function ranking (yesterdayArray,todayArray) {
    
    // 랭킹 등수 변화를 배열에 담아 반환
    const rankArray=[]

    // 배열에 순서에 브랜드 순위가 비례, 
    const todayBrandRankArray=[1,2,3,4,5,6,7,8,9,10]

    // todayBrandRankArray에 존재하는 브랜드가 어제는 몇 등이었는지 조회 하기 위한 배열. (todayBrandRanKArray에 동일한 브랜드 이름이 있을 경우 순위를 담고, 그렇지 않을 경우 "new" 를 담고 있음)
    const yesterdayBrandRankArray=[]


    for (let i=0;i<todayArray.length;i++){
        for(let j=0;j<yesterdayArray.length;j++){
            
            //todayArray 배열의 값이 yesterdayArray도 있을 경우 j(몇번쨰 있는지)를 담고 반복문을 종료 그렇지 않을 경우 "new를 담는다"
            if(todayArray[i]===yesterdayArray[j]){
                yesterdayBrandRankArray.push(j+1)
                break;   
            }
            else{
                if(j===9){
                yesterdayBrandRankArray.push(100)
                }
                continue      
            }
        }
    }
    console.log('yesterdayBrandRankArray=',yesterdayBrandRankArray)

    //todayArray에 있는 배열 요소가 yesterdayArray에는 존재하지 않을 경우, new를 배열에 담음
    for(let i=0;i<todayBrandRankArray.length;i++){
        if(yesterdayBrandRankArray[i]===100){
            rankArray.push("new")
        }
        else{
            // yesterdayBrandRankArray에는 어제와 오늘 모두 등수에 존재하는 브랜드 중 전날의 순위가 담겨져 있고, todayBrandRankArray에는 오늘의 순위가 들어 있으니, 두 배열을 뺴면 어제 대비 오늘의 등수 차이가 나옴. 
            // +1일 경우 어제대비 오늘 1등 상승, -3일 경우 어제대비 오늘 3등 하락
            rankArray.push(yesterdayBrandRankArray[i]-todayBrandRankArray[i]);
        }
    }
return rankArray;
}


const arrayA = [3,1,2,4,5,7,11,23,35,13]
const arrayB = [1,4,2,6,5,8,13,24,3,14,23]

console.log(ranking(arrayA,arrayB))