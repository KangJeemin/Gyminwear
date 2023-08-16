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
            <div id={styles.bestTop_topText} className={styles.setTextCenter}>
                <h3 id={styles.bestTop_text} >이번 주 인기 상의</h3>
            </div>
            <div id={styles.bestTop_itemContainer_flexNowrap}>
                <div id={styles.bestTop_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestTop_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestTop_item_imageSize}></span>
                          <span id={styles.bestTop_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestTop_item_itemBrandName}><h4>{item.brandName}</h4></span>
                            <span id={styles.bestTop_item_itemName}><h5>{item.itemName}</h5></span>
                            <span id={styles.bestTop_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                          </span>
                        </span>
                    ))}
                </div>
                <div id={styles.bestTop_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestTop_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestTop_item_imageSize}></span>
                          <span id={styles.bestTop_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestTop_item_itemBrandName}><h4>{item.brandName}</h4></span>
                            <span id={styles.bestTop_item_itemName}><h5>{item.itemName}</h5></span>
                            <span id={styles.bestTop_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                          </span>
                        </span>
                    ))}
                </div>
                <div id={styles.bestTop_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestTop_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestTop_item_imageSize}></span>
                          <span id={styles.bestTop_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestTop_item_itemBrandName}><h4>{item.brandName}</h4></span>
                            <span id={styles.bestTop_item_itemName}><h5>{item.itemName}</h5></span>
                            <span id={styles.bestTop_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                          </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestTop;