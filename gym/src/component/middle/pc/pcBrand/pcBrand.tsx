import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '@/public/context/authcontext';
import styles from './index.module.css';
import Image from 'next/image';
import type { gymWearItem, GymItemProps } from '@/src/type/gymwear';
import convertWon from '@/pages/src/module/convertWon';
import { GetServerSidePropsContext } from 'next';
type getbrandname = {
    gymitem:[],
    brandname:string
}

  const Pc = (props:getbrandname) => {
        const router = useRouter();
        const [pageState,setPageState]=useState<number>(0)
    return(
        <div id={styles.pc_brandContainer} className={`${styles.flex_row}`}>
            <div id={styles.pc_brandLeftBox}></div>
            <div id={styles.pc_brandCenterBox}>
                <div id={styles.pc_brandCenterMarginBox} className={`${styles.text_set_center}`}>brand</div>
                <div id={styles.pc_brandContentBox} className={`${styles.grid_5x4} ${styles.flex_scrollSet}`}>
                   {props.gymitem.map((object:gymWearItem, index:number) => (
                        <span key={index} id={styles.pc_brandItem_itemComponent} className={`${styles.padding_3} ${styles.flex_column}`}>
                            <span id={styles.pc_brandItem_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.pc_brandItem_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.pc_brandItem_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.pc_brandItem_itemName} 
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.pc_brandItem_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))}
                </div>
                {/* <div id={styles.pc_brandNumvberNavigateContainer} className={`${styles.flex_row}`}>   상의 아이템이 20개가 넘어가질 않아서, 일단 주석처리
                    <div id={styles.pc_brandNumberLeftBox}></div>
                    <div id={styles.pc_brandNumberCenterBox} className={`${styles.text_set_center}`}>
                        <div id={styles.pc_brandNumberMargin}></div>
                        {pageState=== 0 ? (
                            <div className={`${styles.flex_row}`}> 
                                <div>&#60;</div>
                                <div id={styles.pc_brandNumberNavigatenNumberMargin}></div>
                                <div style={{border:'1px solid',paddingLeft:'0.5rem',paddingRight:'0.5rem'}}>1</div>
                                <div id={styles.pc_brandNumberNavigatenNumberMargin}></div>
                                <div>2</div>
                                <div id={styles.pc_brandNumberNavigatenNumberMargin}></div>
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
                                <div id={styles.pc_brandNumberNavigatenNumberMargin}></div>
                                <div>1</div>
                                <div id={styles.pc_brandNumberNavigatenNumberMargin}></div>
                                <div style={{border:'1px solid',paddingLeft:'0.5rem',paddingRight:'0.5rem'}}>2</div>
                                <div id={styles.pc_brandNumberNavigatenNumberMargin}></div>
                                <div>&#62;</div>
                            </div>
                        ) : null}
                        
                        <div id={styles.pc_brandNumberMargin}></div>
                    </div>
                    <div id={styles.pc_brandNumberRightBox}></div>
                </div> */}
            </div>
            <div id={styles.pc_brandRightBox}></div>
        </div>
    )
}
export default Pc