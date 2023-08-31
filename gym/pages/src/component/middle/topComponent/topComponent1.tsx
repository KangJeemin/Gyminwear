import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '@/public/context/authcontext';
import styles from './topComponent.module.css';
import Image from 'next/image';

const TopComponent1: React.FC = () => { 
    
    const router = useRouter();
    const {hambergerState,searchState,topData,setTopData} = useContext(AuthContext)
    const topItemDataAPI = async () =>{
         await fetch(`/api/toppage?page=1`)
                .then(res=> res.json())
                .then(data=>setTopData(data))
            }
    useEffect(()=>{
        topItemDataAPI()
    })
 
  return (
    <div id={styles.topComponent}>
        <div id={styles.topComponent_topText}  className={styles.text_set_center}>
          <h3 id={styles.topComponent_text}>Top</h3>
        </div>
             <div id={styles.topComponent_itemContainer} className={`${styles.grid_1x2} ${styles.flex_scrollSet}`}>
                     {topData.map((object, index) => (
                        <span key={index} id={styles.topComponent_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                            <span id={styles.topComponent_item_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.topComponent_item_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.topComponent_item_itemBrandName}><h4>{object.brandname}</h4></span>
                                <span id={styles.topComponent_item_itemName}><h5>{object.productname}</h5></span>
                                <span id={styles.topComponent_item_itemPrice}><h5>{object.price}</h5></span>
                            </span>
                        </span>
                    ))}
        </div>
        <div id ={styles.topComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
                <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`}>&#60;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}>
                    <span className={styles.color_blue}>1</span>
                    <span className={styles.color_black}>/3</span>
                </span>
                <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
                    router.push("/topPage1")
                }}>&#62;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
        </div>
    </div>
  );
};

export default TopComponent1;
