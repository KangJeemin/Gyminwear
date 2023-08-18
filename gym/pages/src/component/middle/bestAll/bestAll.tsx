import React, { useState } from 'react'
import styles from './bestAll.module.css'

interface Item {
    brandName:string
    itemName:string
    itemPrice:number|string
}

const BestAll:React.FC = () =>{
    let array
    async function mysqlAPI ()  {
        const res = await fetch('http://localhost:3000/api/test')
        const data = await res.json()
        array= data
        console.log(array)   
    }
    mysqlAPI()
    
    
 const items:Item[] =[
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩'
    },
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩'
    },
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩'
    },
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩'
    }
    
 ]
 
 
    return(
        <div id={styles.bestAll}> 
            <div id={styles.bestAll_topText}>
                <h3 id={styles.bestAll_text}>이번 주 인기 상품</h3>
            </div>
            <div id={styles.bestAll_itemContainer_flexNowrap}>
                <div id={styles.bestAll_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestAll_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestAll_item_imageSize}></span>
                          <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestAll_item_itemBrandName}><h4>{item.brandName}</h4></span>
                            <span id={styles.bestAll_item_itemName}><h5>{item.itemName}</h5></span>
                            <span id={styles.bestAll_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                          </span>
                        </span>
                    ))}
                </div>
                <div id={styles.bestAll_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestAll_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestAll_item_imageSize}></span>
                          <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestAll_item_itemBrandName}><h5>{item.brandName}</h5></span>
                            <span id={styles.bestAll_item_itemName}><h5>{item.itemName}</h5></span>
                            <span id={styles.bestAll_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                          </span>
                        </span>
                    ))}
                </div>
                <div id={styles.bestAll_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestAll_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestAll_item_imageSize}></span>
                          <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestAll_item_itemBrandName}><h3>{item.brandName}</h3></span>
                            <span id={styles.bestAll_item_itemName}><h4>{item.itemName}</h4></span>
                            <span id={styles.bestAll_item_itemPrice}><h4>{item.itemPrice}</h4></span>
                          </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestAll;