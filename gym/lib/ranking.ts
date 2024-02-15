

export default function ranking (yesterdayArray:[],todayArray:[]) {
    const rankArray:[]=[]
    const yesterdayArraylocation=[]
    for (let i=0;i<todayArray.length;i++){
        for(let j=0;j<yesterdayArray.length;j++){
            if(todayArray[i]===yesterdayArray[j]){
                yesterdayArraylocation.push(j+1)
                break;   
            }
            else{
                yesterdayArraylocation.push(undefined)
                break;
            }
        }
    }
    return rankArray
}