
function setPcGrid (countresult:number,setuseState:Function) {
    if(countresult==0){
        setuseState('')
    }
    else if(countresult<5){
        setuseState('grid_1x4')
    }
    else if(countresult<9){
        setuseState('grid_2x4')
    }
    else if(countresult<13){
        setuseState('grid_3x4')
    }
    else if(countresult<17){
        setuseState('grid_4x4')
    }
    else{
        setuseState('grid_5x4')
    }
}

export default setPcGrid
