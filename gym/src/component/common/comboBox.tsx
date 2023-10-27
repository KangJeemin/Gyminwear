import React, { useEffect, useState,useContext } from 'react';
import { AuthContext } from '@/public/context/authcontext';
type comboBoxProps = {
    handle:Function
}
const ComboBox= (props:comboBoxProps) => {
    const {comboBoxState, setComboBoxState} = useContext(AuthContext)
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
			<option value="all" selected>All</option>
            <option value="긴팔">Long Sleeve</option>
            <option value="반팔">T-Shirt</option>
            <option value="반바지">Short Pants</option>
            <option value="긴바지">Long Pants</option>
		</select>
    )
}
export default ComboBox
