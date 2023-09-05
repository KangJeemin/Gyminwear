function convertWon(number:number) {
    try {
        const formattedNumber = new Intl.NumberFormat('ko-KR').format(Math.floor(number));
        return formattedNumber;
    } catch (error) {
        return "유효한 숫자를 입력하세요.";
    }
}

export default convertWon