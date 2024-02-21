import {describe, expect, test} from '@jest/globals';
import ranking2 from '../ranking2'

const arrayA = [3,1,2,4,5,7,11,23,35,13]
const arrayB = [1,4,2,6,5,8,13,24,3,14,23]


describe('ranking module2',()=>{
    test('전날 등수와 오늘 등수의 차이를 반환 ',()=>{
        expect(ranking2(arrayA,arrayB));
    })
})
