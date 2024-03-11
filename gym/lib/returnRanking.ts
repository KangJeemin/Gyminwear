

function generateTrueArray(todayArray: number[], yesterdayArray: number[]): (number | boolean)[][] {

    const trueArray: (number | boolean)[][] = todayArray.map((item) => {
        const index = yesterdayArray.indexOf(item);
        return index !== -1 ? [item, true] : [item, false];
    });
    return trueArray;
}

function calculateRankDifference(trueArray: (number | boolean)[][],yesterdayArray: number[]): (number | string)[] {

    return trueArray.map(([item, isTrue],key) => {
        if (!isTrue) return "new";
        const yesterdayIndex = yesterdayArray.findIndex((value) => value === item);
        return yesterdayIndex-key;
    });
}

export default function returnRanking(yesterdayArray: number[], todayArray: number[]): (number | string)[] {
    const trueArray = generateTrueArray(todayArray, yesterdayArray);
    const rankDifference = calculateRankDifference(trueArray,yesterdayArray);
    return rankDifference;
}
