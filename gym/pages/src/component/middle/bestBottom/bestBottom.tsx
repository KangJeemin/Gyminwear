import React, { useState } from 'react'
import styles from './bestBottom.module.css'

interface Item {
    brandName:string
    itemName:string
    itemPrice:number|string
}

const BestBottom:React.FC = () =>{
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
        <div id={styles.bestBottom}> 
            <div id={styles.bestBottom_BottomText} className={styles.setTextCenter}>
                <h5 id={styles.bestBottom_text} >이번 주 인기 하의</h5>
            </div>
            <div id={styles.bestBottom_itemContainer_flexNowrap}>
                <div id={styles.bestBottom_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestBottom_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestBottom_item_imageSize}></span>
                          <span id={styles.bestBottom_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestBottom_item_itemBrandName}><h4>{item.brandName}</h4></span>
                            <span id={styles.bestBottom_item_itemName}><h5>{item.itemName}</h5></span>
                            <span id={styles.bestBottom_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                          </span>
                        </span>
                    ))}
                </div>
                <div id={styles.bestBottom_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestBottom_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestBottom_item_imageSize}></span>
                          <span id={styles.bestBottom_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestBottom_item_itemBrandName}><h4>{item.brandName}</h4></span>
                            <span id={styles.bestBottom_item_itemName}><h5>{item.itemName}</h5></span>
                            <span id={styles.bestBottom_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                          </span>
                        </span>
                    ))}
                </div>
                <div id={styles.bestBottom_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestBottom_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestBottom_item_imageSize}></span>
                          <span id={styles.bestBottom_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestBottom_item_itemBrandName}><h4>{item.brandName}</h4></span>
                            <span id={styles.bestBottom_item_itemName}><h5>{item.itemName}</h5></span>
                            <span id={styles.bestBottom_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                          </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestBottom;