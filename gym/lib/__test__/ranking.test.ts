import {describe, expect, test} from '@jest/globals';
import ranking from '../ranking'

const arrayA = [1,2,3,4,5,6,7,8,9,10]
const arrayB = [2,3,4,5,6,7,8,9,10,11]
const expactResultArray=[1,1,1,1,1,1,1,1,1,"new"]
describe('ranking module',()=>{
    test('두 배열간의 원소값 차이 테스트 ',()=>{
        expect(ranking(arrayA,arrayB)).toEqual(expactResultArray);
    })
})
