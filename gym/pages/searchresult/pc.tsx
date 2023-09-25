
import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from '@/public/context/authcontext';
import Image from 'next/image'
import convertWon from '@/pages/src/module/convertWon';
import axios from 'axios';
import type { gymWearItem,SearchResultProps  } from '../../src/type/gymwear';
import { GetServerSideProps,GetServerSidePropsContext } from 'next';
import NumberNavigate from '../src/component/middle/numberNavigate/numberNavigate';


interface gymwear{
    data:gymWearItem;
    count: number
}

const Pc = ({item,count}:SearchResultProps) => { 
    const router = useRouter()
    const {searchWord} = useContext(AuthContext)

    return(
        <div id={styles.pc_searchResultContainer} className={`${styles.flex_row}`}>
            <div id={styles.pc_searchResultLeftBox}></div>
            <div id={styles.pc_searchResultCenterbox} className={`${styles.flex_column}`} >
                <div id={styles.pc_searchResultTextBox}>
                    <h2>&#39; {searchWord} &#39; 에 대한 검색 결과를 몇개 발견했습니다 .</h2>
                </div>
                <div id={styles.pc_searchResultInputBox}>
                    <input id={styles.pc_searchResultInput} type="text" />
                </div>
                <div id={styles.pc_searchResultMarginBox}></div>
                <div id={styles.pc_searchResultItemBox} className={`${styles.grid_5x4} ${styles.flex_scrollSet}`}>
                    {item.map((object:gymWearItem, index:number) => (
                            <span key={index} id={styles.pc_topItem_itemComponent} className={`${styles.padding_3} ${styles.flex_column}`}>
                                <span id={styles.pc_topItem_imageSize}>
                                    <Image
                                        src={object.image}
                                        alt='이미지 표시 불가'
                                        layout='fill'
                                        onClick={()=>{
                                            router.push(`${object.url}`)
                                        }}
                                        />
                                </span>
                                <span id={styles.pc_topItem_textBoxSize} className={`${styles.flex_column}`}>
                                    <span id={styles.pc_topItem_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                    <span id={styles.pc_topItem_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                    <span id={styles.pc_topItem_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                                </span>
                            </span>
                        ))}
                </div>
                <div id={styles.pc_searchResultNumverNavigateBox}></div>
            </div>
            <div id={styles.pc_searchResultRightBox}></div>
        </div>
    )
}
  

export default Pc;

