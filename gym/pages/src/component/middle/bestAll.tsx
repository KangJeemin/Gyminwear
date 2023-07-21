import React, { useState } from 'react'
import styles from './bestAll.module.css'
import getArrayLength from '../../module/arrayLength'

interface Item {
    brandName:string
    itemName:string
    itemPrice:number|string
}

const BestAll:React.FC = () =>{
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
        <div id={styles.bestAll}> 
            <div id={styles.bestAll_topText}>
                <h1 id={styles.bestAll_text}>이번 주 인기 상품</h1>
            </div>
            <div id={styles.flex_nowrap}>
                <div id={styles.bestAll_topComponent} className={`${styles.grid_2x2}`}>
                    {items.map((item, index) => (
                        <span key={index} className={`${styles.padding_1} ${styles.flex_column} ${styles.flex_scrollSet}`}>
                          <span id={styles.item_imageSize}></span>
                          <span id={styles.item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.item_itemBrandName}><h1>{item.brandName}</h1></span>
                            <span id={styles.item_itemName}><h2>{item.itemName}</h2></span>
                            <span id={styles.item_itemPrice}><h3>{item.itemPrice}</h3></span>
                          </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestAll;