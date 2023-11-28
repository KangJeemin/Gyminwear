import React, { useState, useEffect, useContext } from 'react';
import styles from './bestAll.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import { AuthContext } from '@/ver1-files/context/authcontext';
import convertWon from '@/ver1-files/module/convertWon';
import type { GymItemProps,gymWearItem } from '@/ver1-files/src/type/gymwear';


const BestAll = (props:GymItemProps) => {
    const {hambergerState,searchState} = useContext(AuthContext)
    const router = useRouter();

    return (
        <div id={styles.bestAll}>
            <div id={styles.bestAll_topText}>
                <h3 id={styles.bestAll_text}>이번 주 인기 짐웨어</h3>
            </div>
            <div id={styles.bestAll_itemContainer_flexNowrap}>
                <div id={styles.bestAll_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {props.gymitem?(props.gymitem.map((object:gymWearItem, index) => (
                        <span key={index} id={styles.bestAll_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                            <span id={styles.bestAll_item_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.bestAll_item_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.bestAll_item_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.bestAll_item_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))):null}
                </div>
            </div>
        </div>
    );
}

export default BestAll;