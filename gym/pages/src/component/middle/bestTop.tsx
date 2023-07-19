import React from 'react'
import styles from './bestTop.module.css'
const bestTop = ()=>{
    return(
        <div id={styles.bestTop}> 
            <div id={styles.bestTop_topText}></div>
            <div id={styles.bestTop_topComponent} className={styles.grid_2x2}>
                <span className={`${styles.padding_1} ${styles.flex_column}`}>
                    <span className={styles.item_imageSize}></span>
                    <span className={`${styles.item_textBoxSize} ${styles.flex_row}`}>
                        <span className={styles.item_textLikeBox}></span>
                        <span className={styles.item_textBrandNameBox}></span>
                    </span>
                </span>
                <span className={`${styles.padding_1} ${styles.flex_column}`}>
                    <span className={styles.item_imageSize}></span>
                    <span className={`${styles.item_textBoxSize} ${styles.flex_row}`}>
                        <span className={styles.item_textLikeBox}></span>
                        <span className={styles.item_textBrandNameBox}></span>
                    </span>
                </span>
                <span className={`${styles.padding_1} ${styles.flex_column}`}>
                    <span className={styles.item_imageSize}></span>
                    <span className={`${styles.item_textBoxSize} ${styles.flex_row}`}>
                        <span className={styles.item_textLikeBox}></span>
                        <span className={styles.item_textBrandNameBox}></span>
                    </span>
                </span>
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

export default bestTop;