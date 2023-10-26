import { fontSize } from '@mui/system';
import { color } from 'framer-motion';
import React from 'react';

type comboBoxProps = {
    handle:Function
}
const comboBox= (props:comboBoxProps) => {
    const selectValue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        props.handle(e.target.value)
    }

    return(
        <select style={{
            backgroundColor:"white",
            color:"black",
            fontSize:"inherit"
            
        }} onChange={selectValue}>
			<option value="all">All</option>
            <option value="긴팔">Long Sleeve</option>
            <option value="반팔">T-Shirt</option>
            <option value="반바지">Short Pants</option>
            <option value="긴바지">Long Pants</option>
		</select>
    )
}
export default comboBox
