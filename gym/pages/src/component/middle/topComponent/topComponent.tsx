import React, { useState, useRef, useEffect } from 'react';
import styles from './topComponent.module.css';

interface Item {
  brandName: string;
  itemName: string;
  itemPrice: number | string;
}

const TopComponent: React.FC = () => {
;
  const [showComponent, setshowComponent] = useState(0);
  


  
  return (
    <div id={styles.topComponent}>
        <div id={styles.topComponent_topText}>
          <h1 id={styles.topComponent_text}>상의</h1>
        </div>
        {showComponent === 0 ? (
        <div id={styles.topComponent_itemContainer} className={`${styles.grid_8x2} ${styles.flex_scrollSet}`}>
          <span id={styles.topComponent_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
            <span id={styles.topComponent_item_imageSize}></span>
            <span id={styles.topComponent_item_textBoxSize} className={`${styles.flex_column}`}>
              <span id={styles.topComponent_item_itemBrandName}><h1>aa</h1></span>
              <span id={styles.topComponent_item_itemName}><h2>bb</h2></span>
              <span id={styles.topComponent_item_itemPrice}><h3>cc</h3></span>
            </span>
          </span>
        </div>
        ): null}
    </div>
  );
};

export default TopComponent;
