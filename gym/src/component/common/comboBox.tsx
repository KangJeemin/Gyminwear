import React, { useEffect, useState,useContext } from 'react';
import { AuthContext } from '@/public/context/authcontext';
import { PropaneSharp, ShortText } from '@mui/icons-material';
type comboBoxProps = {
    handle:Function
}
const ComboBox= (props:comboBoxProps) => {
    const {comboBoxState, setComboBoxState} = useContext(AuthContext)
    const [sortArray, setSortArray]=useState<{ sortvalue: string, sortText: string }[]>([])

    const checkSortNum =(text:string)=>{
        const resultArray:{ sortvalue: string, sortText: string }[]
        const sort5Array:{ sortvalue: string, sortText: string }[]=[
            {sortvalue:"All", sortText:"All"},
            {sortvalue:"긴팔", sortText:"Long Sleeve"},
            {sortvalue:"반팔", sortText:"T-Shirt"},
            {sortvalue:"반바지", sortText:"Short Pants"},
            {sortvalue:"긴바지", sortText:"Long Pants"},
        ]
        // brandpage
        if(text==="brand"){
            setSortArray(sort5Array)
        }
        // toppage
        else if(){
            resultArray = sort5Array.slice(0, 1).concat(sort5Array.slice(3));
        }
        // bottompage
         else 
    }    
    
    const selectValue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        props.handle(e.target.value)
        setComboBoxState(e.target.value);
    }
    return(
        <select value={comboBoxState} style={{
            backgroundColor:"white",
            color:"black",
            fontSize:"inherit"
        }} onChange={selectValue}>
            {sortArray.map((object,index)=>(
            <option key={index} value={object.sortvalue} >{object.sortText}</option>    
            ))}
		</select>
    )
}
export default ComboBox
