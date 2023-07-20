import React from 'react'
import styles from './bestAll.module.css'
const bestAll = ()=>{
    return(
        <div id={styles.bestAll}> 
            <div id={styles.bestAll_topText}>
                <h1 id={styles.bestAll_text}>이번 주 인기 상품</h1>
            </div>
            <div id={styles.flex_nowrap}>
                <div id={styles.bestAll_topComponent} className={`${styles.grid_2x2}`}>
                    <span className={`${styles.padding_1} ${styles.flex_column}`}>
                        <span id={styles.item_imageSize}></span>
                        <span id={styles.item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.item_itemBrandName}>borntowin</span>
                            <span id={styles.item_itemName}>헤리코든 오버핏</span>
                            <span id={styles.item_itemPrice}>44,000원</span>
                        </span>
                    </span>
                </div>
                <div id={styles.bestAll_topComponent} className={styles.grid_2x2}>
                    <span className={`${styles.padding_1} ${styles.flex_column}`}>
                        <span id={styles.item_imageSize}></span>
                        <span id={styles.item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.item_itemBrandName}>borntowin</span>
                            <span id={styles.item_itemName}>헤리코든 오버핏</span>
                            <span id={styles.item_itemPrice}>44,000원</span>
                        </span>
                    </span>
                </div>
                <div id={styles.bestAll_topComponent} className={styles.grid_2x2}>
                    <span className={`${styles.padding_1} ${styles.flex_column}`}>
                        <span id={styles.item_imageSize}></span>
                        <span id={styles.item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.item_itemBrandName}>borntowin</span>
                            <span id={styles.item_itemName}>헤리코든 오버핏</span>
                            <span id={styles.item_itemPrice}>44,000원</span>
                        </span>
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default bestAll;