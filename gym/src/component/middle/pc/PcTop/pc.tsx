import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '@/public/context/authcontext';
import styles from './index.module.css';
import Image from 'next/image';
import type { gymWearItem, GymItemProps } from '@/src/type/gymwear';
import convertWon from '@/pages/src/module/convertWon';
import { GetServerSidePropsContext } from 'next';


  const Pc = ({gymitem}:GymItemProps) => {
        const router = useRouter();
        const [pageState,setPageState]=useState<number>(0)
        const [sortState, setSortState]=useState<number>(0)
    return(
        <div id={styles.pc_topContainer} className={`${styles.flex_row}`}>
            <div id={styles.pc_topLeftBox}></div>
            <div id={styles.pc_topCenterBox}>
                <div id={styles.pc_topCenterMarginBox} className={`${styles.text_set_center}`}>Top</div>
                <div id={styles.pc_topCenterSortBox} className={`${styles.text_set_center}`}>
                    <div id={styles.pc_topCenterSortItems} className={sortState===0 ? styles.color_blue : "" }
                    onClick={()=>{
                        setSortState(0)
                        // router.push(`/brandPage?brandname=${props.brandname}&sort=all&page=1`)
                        }}>All</div>
                    <div id={styles.pc_topCenterSortItems} className={sortState===1 ? styles.color_blue : ""} 
                    onClick={()=>{
                        setSortState(1)
                        // router.push(`/brandPage?brandname=${props.brandname}&sort=긴팔&page=1`)
                        }}>LongSleeve</div>
                    <div id={styles.pc_topCenterSortItems} className={sortState===2 ? styles.color_blue : ""}
                    onClick={()=>{
                        setSortState(2)
                        // router.push(`/brandPage?brandname=${props.brandname}&sort=반팔&page=1`)
                        }}>T-Shirt</div>
                </div>
                <div id={styles.pc_topContentBox} className={`${styles.grid_5x4} ${styles.flex_scrollSet}`}>
                   {gymitem.map((object:gymWearItem, index:number) => (
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
                                <span id={styles.pc_topItem_itemName} 
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.pc_topItem_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))}
                </div>
                {/* <div id={styles.pc_topNumvberNavigateContainer} className={`${styles.flex_row}`}>   상의 아이템이 20개가 넘어가질 않아서, 일단 주석처리
                    <div id={styles.pc_topNumberLeftBox}></div>
                    <div id={styles.pc_topNumberCenterBox} className={`${styles.text_set_center}`}>
                        <div id={styles.pc_topNumberMargin}></div>
                        {pageState=== 0 ? (
                            <div className={`${styles.flex_row}`}> 
                                <div>&#60;</div>
                                <div id={styles.pc_topNumberNavigatenNumberMargin}></div>
                                <div style={{border:'1px solid',paddingLeft:'0.5rem',paddingRight:'0.5rem'}}>1</div>
                                <div id={styles.pc_topNumberNavigatenNumberMargin}></div>
                                <div>2</div>
                                <div id={styles.pc_topNumberNavigatenNumberMargin}></div>
                                <div onClick={()=>{
                                    router.push(`/topPage?page=2`)
                                    setPageState(1)
                                }}>&#62;</div>
                            </div>
                        ) : 
                        pageState === 1 ? (
                            <div className={`${styles.flex_row}`}> 
                                <div onClick={()=>{
                                    router.push(`/topPage?page=1`)
                                    setPageState(0)
                                }}>&#60;</div>
                                <div id={styles.pc_topNumberNavigatenNumberMargin}></div>
                                <div>1</div>
                                <div id={styles.pc_topNumberNavigatenNumberMargin}></div>
                                <div style={{border:'1px solid',paddingLeft:'0.5rem',paddingRight:'0.5rem'}}>2</div>
                                <div id={styles.pc_topNumberNavigatenNumberMargin}></div>
                                <div>&#62;</div>
                            </div>
                        ) : null}
                        
                        <div id={styles.pc_topNumberMargin}></div>
                    </div>
                    <div id={styles.pc_topNumberRightBox}></div>
                </div> */}
            </div>
            <div id={styles.pc_topRightBox}></div>
        </div>
    )
}
export default Pc