import React, { useEffect, useState,useContext } from 'react';
import { AuthContext } from '@/public/context/authcontext';
import { ShortText } from '@mui/icons-material';
type comboBoxProps = {
    handle:Function
}
const ComboBox= (props:comboBoxProps) => {
    const {comboBoxState, setComboBoxState} = useContext(AuthContext)
    const sort5Array =[
        {sortvalue:"All", sortText:"All"},
        {sortvalue:"긴팔", sortText:"Long Sleeve"},
        {sortvalue:"반팔", sortText:"T-Shirt"},
        {sortvalue:"반바지", sortText:"Short Pants"},
        {sortvalue:"긴바지", sortText:"Long Pants"},
    ]
    
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
            {sort5Array.map((object,index)=>(
            <option key={index} value={object.sortvalue} >{object.sortText}</option>    
            ))}
		</select>
    )
}
export default ComboBox
