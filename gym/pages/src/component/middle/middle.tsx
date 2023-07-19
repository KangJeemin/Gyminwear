import React from 'react'
import styles from './middle.module.css'
const middle = ()=>{
    return(
        <div id='middle' className={styles.middle}> 
            <div id={styles.middle_topText} ></div>
            <div id='middle_middletopComponent'  className={styles.middle_middletopComponent}></div>
            
        </div>
    )
}

export default middle;