import {describe, expect, test} from '@jest/globals';
import ranking from '../ranking'

const arrayA = [1,2,3,4,5,6,7,8,9,10]
const arrayB = [2,3,4,5,6,7,8,9,10,11]
const expactResultArray=[1,1,1,1,1,1,1,1,1,"new"]
describe('ranking module',()=>{
    test('전날 등수와 오늘 등수의 차이를 반환 ',()=>{
        expect(ranking(arrayA,arrayB)).toEqual(expactResultArray);
    })
})
