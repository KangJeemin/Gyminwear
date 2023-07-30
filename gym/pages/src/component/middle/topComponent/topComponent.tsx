import React, { useState, useRef, useEffect } from 'react';
import styles from './topComponent.module.css';

interface Item {
  brandName: string;
  itemName: string;
  itemPrice: number | string;
}

const TopComponent: React.FC = () => {
  const target = useRef<HTMLDivElement | null>(null);
  const target2 = useRef<HTMLDivElement | null>(null);
  const [showNewDiv, setShowNewDiv] = useState(false);
  const [showNewDiv2, setShowNewDiv2] = useState(false);

  const options = {
    //타겟의 요소가 50% 가시성이 확인 되었을때
    threshold: 0.5,
  };

  const callback:IntersectionObserverCallback= (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            setShowNewDiv(true)
            console.log('화면에서 노출됨');
        } else {
            console.log('화면에서 제외됨');
        }
    });
}
const encoder = new TextEncoder();
    let url ='https://openapi.naver.com/v1/search/blog?/query=rbw'
    // let url ='https://openapi.naver.com/v1/search/shop?query='
    let ClientID='vqhMSE8joE5v7eeLQaHt'
    let ClientSecret='EMjd5sI8k9'

    let AppName=encodeURIComponent('rbw')
    console.log(AppName)
    let URL =url + AppName
    console.log(URL)
    let returnData=[{}]
    

  useEffect(() => {
    fetch(URL,{
      method:'GET',
      headers:
        {'X-Naver-Client-Id':ClientID, 'X-Naver-Client-Secret': ClientSecret}
    
      }
    ).then((response) => response.json()).then(data=>{console.log(data)})
    
    const observer1 = new IntersectionObserver(callback, options);

    if (target.current) {
      observer1.observe(target.current); //관찰 대상 등록
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer1.disconnect();
      
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
      </div>
      {showNewDiv && (
          <div style={{ backgroundColor: 'blue', padding: '10px', margin: '10px' }} ref={target2}>
            새로운 div 컴포넌트가 생성되었습니다!2
          </div>
        )}
        {showNewDiv2 && (
          <div style={{ backgroundColor: 'green', padding: '10px', margin: '10px',height: 60 }}>
            새로운 div 컴포넌트가 생성되었습니다!2
          </div>
        )}
    </div>
  );
};

export default TopComponent;
