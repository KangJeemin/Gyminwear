type CalulateRankingArray = number;
type RankingArray = number | string;

function generateTrueArray(todayArray: CalulateRankingArray[], yesterdayArray: CalulateRankingArray[]): (CalulateRankingArray | boolean)[][] {

    const trueArray: (CalulateRankingArray | boolean)[][] = todayArray.map((item) => {
        const index = yesterdayArray.indexOf(item);
        return index !== -1 ? [item, true] : [item, false];
    });
    return trueArray;
}

function calculateRankDifference(todayArray: CalulateRankingArray[], trueArray: (CalulateRankingArray | boolean)[][],yesterdayArray: CalulateRankingArray[]): (number | string)[] {


    return trueArray.map(([item, isTrue],key) => {
        if (!isTrue) return "new";
        
        // const index = todayArray.indexOf(item);
        const yesterdayIndex = yesterdayArray.findIndex((value) => value === item);
        return yesterdayIndex-key;
    });
}

export default function ranking2(yesterdayArray: CalulateRankingArray[], todayArray: CalulateRankingArray[]): (number | string)[] {
    const trueArray = generateTrueArray(todayArray, yesterdayArray);
    const rankDifference = calculateRankDifference(todayArray, trueArray,yesterdayArray);
    return rankDifference;
}
