import React from 'react'
import styles from './bestAll.module.css'
const bestAll = ()=>{
    return(
        <div id={styles.bestAll}> 
            <div id={styles.bestAll_topText}>
                <h1 id={styles.bestAll_text}>이번 주 인기 상품</h1>
            </div>
            <div id={styles.flex_nowrap}>
                <div id={styles.bestAll_topComponent} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    <span className={`${styles.padding_1} ${styles.flex_column}`}>
                        <span id={styles.item_imageSize}></span>
                        <span id={styles.item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.item_itemBrandName}><h1>borntowin</h1></span>
                            <span id={styles.item_itemName}><h2>헤리코든 오버핏</h2></span>
                            <span id={styles.item_itemPrice}><h3>44,000원</h3></span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default bestAll;