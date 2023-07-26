import React, { useState ,useRef, useEffect} from 'react'
import styles from './topComponent.module.css'

interface Item {
    brandName:string
    itemName:string
    itemPrice:number|string
}

const TopPage:React.FC = () =>{
  const target = useRef<HTMLDivElement | null>(null);
  const [showNewDiv, setShowNewDiv] = useState(false);
   
//     const items:Item[] =[
//     {
//         brandName:"brontowin",
//         itemName:"헤리코든 오버핏",
//         itemPrice:44000+'원'
//     },
//     {
//         brandName:"brontowin",
//         itemName:"헤리코든 오버핏",
//         itemPrice:44000+'원'
//     },
//     {
//         brandName:"brontowin",
//         itemName:"헤리코든 오버핏",
//         itemPrice:44000+'원'
//     },
//     {
//         brandName:"brontowin",
//         itemName:"헤리코든 오버핏",
//         itemPrice:44000+'원'
//     }
    
//  ]




const options = {
  threshold: 1.0,
};

const callback = () => {
  if (target.current) {
    target.current.innerText += "관측되었습니다";
  }
};

const observer = new IntersectionObserver(callback, options);

useEffect(() => {
  if (target.current) {
    observer.observe(target.current);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);








  {/* {items.map((item, index) => (
                    <span key={index} id={styles.topComponent_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                        <span id={styles.topComponent_item_imageSize}></span>
                        <span id={styles.topComponent_item_textBoxSize} className={`${styles.flex_column}`}>
                        <span id={styles.topComponent_item_itemBrandName}><h1>{item.brandName}</h1></span>
                        <span id={styles.topComponent_item_itemName}><h2>{item.itemName}</h2></span>
                        <span id={styles.topComponent_item_itemPrice}><h3>{item.itemPrice}</h3></span>
                        </span>
                    </span>
                ))} */}
    return(
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
    )
}

export default TopPage;