import React, { useState, useRef, useEffect } from 'react';
import styles from './topComponent.module.css';

interface Item {
  brandName: string;
  itemName: string;
  itemPrice: number | string;
}

const TopComponent: React.FC = () => {
  const target = useRef<HTMLDivElement | null>(null);
  const [showNewDiv, setShowNewDiv] = useState(false);

  const options = {
    threshold: 1.0,
  };

  const callback = () => {
    if (target.current) {
      setShowNewDiv(true)
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (target.current) {
      observer.observe(target.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [options.threshold]);

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
        {showNewDiv && (
          <div style={{ backgroundColor: 'lightblue', padding: '10px', margin: '10px' }}>
            새로운 div 컴포넌트가 생성되었습니다!
          </div>
        )}
      </div>
    </div>
  );
};

export default TopComponent;
