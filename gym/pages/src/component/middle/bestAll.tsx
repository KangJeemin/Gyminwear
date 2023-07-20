import React from 'react'
import styles from './bestAll.module.css'
const bestAll = ()=>{
    return(
        <div id={styles.bestAll}> 
            <div id={styles.bestAll_topText}>
                <h1 id={styles.bestAll_text}>이번 주 인기 상품</h1>
            </div>
            <div id={styles.bestAll_topComponent} className={styles.grid_2x2}>
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

export default bestAll;