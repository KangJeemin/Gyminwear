
function splitIntoChunk(arr:string[], chunk:number) {
    const result = [];
    for (let index=0; index < arr.length; index += chunk) {
      let tempArray;
      // slice() 메서드를 사용하여 특정 길이만큼 배열을 분리함
      tempArray = arr.slice(index, index + chunk);
      // 빈 배열에 특정 길이만큼 분리된 배열을 추가
      result.push(tempArray);
    }
    return result;
  }

export default splitIntoChunk