import React, { useState } from 'react'
import styles from './bestTop.module.css'

interface Item {
    brandName:string
    itemName:string
    itemPrice:number|string
}

const BestTop:React.FC = () =>{
 const items:Item[] =[
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    }
    
 ]
 
 
    return(
        <div id={styles.bestTop}> 
            <div id={styles.bestTop_topText}>
                <h1 id={styles.bestTop_text}>이번 주 인기 상품</h1>
            </div>
            <div id={styles.bestTop_itemContainer_flexNowrap}>
                <div id={styles.bestTop_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestTop_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestTop_item_imageSize}></span>
                          <span id={styles.bestTop_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestTop_item_itemBrandName}><h1>{item.brandName}</h1></span>
                            <span id={styles.bestTop_item_itemName}><h2>{item.itemName}</h2></span>
                            <span id={styles.bestTop_item_itemPrice}><h3>{item.itemPrice}</h3></span>
                          </span>
                        </span>
                    ))}
                </div>
                <div id={styles.bestTop_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestTop_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestTop_item_imageSize}></span>
                          <span id={styles.bestTop_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestTop_item_itemBrandName}><h1>{item.brandName}</h1></span>
                            <span id={styles.bestTop_item_itemName}><h2>{item.itemName}</h2></span>
                            <span id={styles.bestTop_item_itemPrice}><h3>{item.itemPrice}</h3></span>
                          </span>
                        </span>
                    ))}
                </div>
                <div id={styles.bestTop_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestTop_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestTop_item_imageSize}></span>
                          <span id={styles.bestTop_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestTop_item_itemBrandName}><h1>{item.brandName}</h1></span>
                            <span id={styles.bestTop_item_itemName}><h2>{item.itemName}</h2></span>
                            <span id={styles.bestTop_item_itemPrice}><h3>{item.itemPrice}</h3></span>
                          </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestTop;