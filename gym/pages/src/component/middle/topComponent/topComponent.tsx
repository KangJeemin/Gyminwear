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
      <div id={styles.topComponent_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`} ref={target}>
        <span>a</span>
        <span>a</span>
        <span>a</span>
        <span>a</span>
      </div>
    </div>
  );
};

export default TopComponent;
