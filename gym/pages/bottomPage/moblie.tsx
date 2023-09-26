import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '@/public/context/authcontext';
import styles from './index.module.css';
import Image from 'next/image';
import type { gymWearItem ,GymItemProps} from '@/src/type/gymwear';
import convertWon from '@/pages/src/module/convertWon';
import { GetServerSidePropsContext } from 'next';



const Mobile= ({gymitem}:GymItemProps) => { 
    
    const router = useRouter();
    const {hambergerState,searchState,topAndBottomData,setTopAndBottomData} = useContext(AuthContext)
    const [pageState,setPageState] = useState<number>(0)
    
 
  return (
    <div id={styles.bottomComponent}>
        <div id={styles.bottomComponent_topText}  className={styles.text_set_center}>
          <h3 id={styles.bottomComponent_text}>Bottom</h3>
        </div>
             <div id={styles.bottomComponent_itemContainer} className={`${styles.grid_1x2} ${styles.flex_scrollSet}`}>
                     {gymitem.map((object:gymWearItem, index:number) => (
                        <span key={index} id={styles.bottomComponent_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                            <span id={styles.bottomComponent_item_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.bottomComponent_item_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.bottomComponent_item_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.bottomComponent_item_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.bottomComponent_item_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))}
        </div>
        {/* {pageState===0 ? (
            <div id ={styles.bottomComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
                <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`}>&#60;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}>
                    <span className={styles.color_blue}>1</span>
                    <span className={styles.color_black}>/2</span>
                </span>
                <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
                    setPageState(1)
                    bottomItemDataAPI(2)
                    window.scrollTo(0, 0);
                    }}>&#62;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
            </div>   
        ) : pageState===1 ? (
            <div id ={styles.bottomComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
                <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
                    setPageState(0)
                    bottomItemDataAPI(1)
                    window.scrollTo(0, 0);
                }}>&#60;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}>
                    <span className={styles.color_blue}>2</span>
                    <span className={styles.color_black}>/2</span>
                </span>
                <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
                    }}>&#62;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
            </div>   
        )
         : pageState===2 ? (
            <div id ={styles.bottomComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
                <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
                    setPageState(1)
                    topItemDataAPI(2)
                }}>&#60;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}>
                    <span className={styles.color_blue}>3</span>
                    <span className={styles.color_black}>/3</span>
                </span>
                <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
                    }}>&#62;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
            </div>   
        ) 
        : null} */}
        
    </div>
  );
};

export default Mobile;
