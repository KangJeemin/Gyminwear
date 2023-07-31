import React, { useState, useRef, useEffect } from 'react';
import styles from './topComponent.module.css';

interface Item {
  brandName: string;
  itemName: string;
  itemPrice: number | string;
}

const TopComponent1: React.FC = () => {

  const items:Item[] =[
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin1",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin2",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin3",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin4",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin5",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin6",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin7",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin8",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin9",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin10",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin11",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin12",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin13",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin14",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin15",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },

    
 ]
 
    
  return (
    <div id={styles.topComponent}>
        <div id={styles.topComponent_topText}>
          <h1 id={styles.topComponent_text}>상의</h1>
        </div>
            <div id={styles.topComponent_itemContainer} className={`${styles.grid_8x2} ${styles.flex_scrollSet}`}>
            {items.map((item, index) => (
                <span key={index} id={styles.topComponent_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                <span id={styles.topComponent_item_imageSize}></span>
                <span id={styles.topComponent_item_textBoxSize} className={`${styles.flex_column}`}>
                    <span id={styles.topComponent_item_itemBrandName}><h1>{item.brandName}</h1></span>
                    <span id={styles.topComponent_item_itemName}><h2>{item.itemName}</h2></span>
                    <span id={styles.topComponent_item_itemPrice}><h3>{item.itemPrice}</h3></span>
                </span>
                </span>
                ))}
        </div>
        <div id ={styles.topComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
                <span className={`${styles.width_15per}`}>a</span>
                <span className={`${styles.width_15per}`}>b</span>
                <span className={`${styles.width_15per}`}>c</span>
                <span className={`${styles.width_15per}`}>d</span>
                <span className={`${styles.width_15per}`}>e</span>
        </div>
    </div>
  );
};

export default TopComponent1;
