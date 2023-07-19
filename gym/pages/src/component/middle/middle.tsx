import React from 'react'
import styles from './middle.module.css'
const middle = ()=>{
    return(
        <div id={styles.middle}> 
            <div id={styles.middle_topText}></div>
            <div id={styles.middle_topComponent} className={styles.grid_4x4}>
                <span className={`${styles.padding_1} ${styles.flex_column}`}>
                    <span className={styles.item_imageSize}></span>
                    <span className={`${styles.item_textBoxSize} ${styles.flex_row}`}>
                        <span className={styles.item_textLikeBox}></span>
                        <span className={styles.item_textBrandNameBox}></span>
                    </span>
                </span>
                
                
            </div>
            
        </div>
    )
}

export default middle;