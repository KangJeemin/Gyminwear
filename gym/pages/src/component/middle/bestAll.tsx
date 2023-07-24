import React, { useState } from 'react'
import styles from './bestAll.module.css'
import getArrayLength from '../../module/arrayLength'

interface Item {
    brandName:string;
    itemName:string;
    itemPrice:number|string;
}

interface ItemFrom{
    itemFrom4?:Item[]
    itemFrom5?:Item[]
}

const BestAll:React.FC = () =>{
 const items:ItemFrom[] =[
    {
        itemFrom4:[
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
    ]
    },
    {
        itemFrom5:[
            {
                brandName:"brontowin",
                itemName:"헤리코든 오버핏",
                itemPrice:44000+'원이'
            },
            {
                brandName:"brontowin",
                itemName:"헤리코든 오버핏",
                itemPrice:44000+'원이'
            },
            {
                brandName:"brontowin",
                itemName:"헤리코든 오버핏",
                itemPrice:44000+'원이'
            },
            {
                brandName:"brontowin",
                itemName:"헤리코든 오버핏",
                itemPrice:44000+'원'
            },
        ]
    }

 ]
    return(
        <div id={styles.bestAll}> 
            <div id={styles.bestAll_topText}>
                <h1 id={styles.bestAll_text}>이번 주 인기 상품</h1>
            </div>
            <div id={styles.flex_nowrap}>
                {items.map((item, index) => {
                     return (
                        <div key={index} id={styles.bestAll_topComponent} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`} >
                            {item.itemFrom4 && item.itemFrom4.map((innerItem, innerIndex) => {
                                return (
                                    <span id={styles.bestAll_topComponent_1} key={innerIndex} className={`${styles.padding_1} ${styles.flex_column}`}>
                                        <span id={styles.item_imageSize}></span>
                                        <span id={styles.item_textBoxSize} className={`${styles.flex_column}`}>
                                            <span id={styles.item_itemBrandName}><h1>{innerItem.brandName}</h1></span>
                                            <span id={styles.item_itemName}><h2>{innerItem.itemName}</h2></span>
                                            <span id={styles.item_itemPrice}><h3>{innerItem.itemPrice}</h3></span>
                                        </span>
                                    </span>
                                );
                            })}
                            {/* {item.itemFrom5 && item.itemFrom5.map((innerItem, innerIndex) => {
                                return (
                                    <span id={styles.bestAll_topComponent_1} key={innerIndex} className={`${styles.padding_1} ${styles.flex_column}`}>
                                        <span id={styles.item_imageSize}></span>
                                        <span id={styles.item_textBoxSize} className={`${styles.flex_column}`}>
                                            <span id={styles.item_itemBrandName}><h1>{innerItem.brandName}</h1></span>
                                            <span id={styles.item_itemName}><h2>{innerItem.itemName}</h2></span>
                                            <span id={styles.item_itemPrice}><h3>{innerItem.itemPrice}</h3></span>
                                        </span>
                                    </span>
                                );
                            })} */}
                            
                        </div>
                    );
                })}
                </div>
            </div>
        
    )
}

export default BestAll;