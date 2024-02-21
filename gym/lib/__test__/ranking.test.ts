import {describe, expect, test} from '@jest/globals';
import ranking from '../ranking'

const arrayA = [3,1,2,4,5,7,11,23,35,13]
const arrayB = [1,4,2,6,5,8,13,24,3,14]
const expactResultArray=[1,2,0,"new",0,"new",3,"new",-8,"new"]
describe('ranking module',()=>{
    test('전날 등수와 오늘 등수의 차이를 반환 ',()=>{
        expect(ranking(arrayA,arrayB)).toEqual(expactResultArray);
    })
})
