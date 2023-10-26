import React from 'react';


const comboBox= () => {

    return(
        <select>
			<option key="All" value="All">All</option>
            <option key="LongSleeve" value="LongSleeve">Long Sleeve</option>
            <option key="TShirt" value="TShirt">T-Shirt</option>
            <option key="shortPants" value="shortPants">Short Pants</option>
            <option key="LongPants" value="LongPants">Long Pants</option>
		</select>
    )
}
export default comboBox
