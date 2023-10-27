import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '@/public/context/authcontext';
import styles from './index.module.css';
import Image from 'next/image';
import type { gymWearItem, GymItemProps } from '@/src/type/gymwear';
import convertWon from '@/pages/src/module/convertWon';
import { GetServerSidePropsContext } from 'next';
type getBottomItem = {
    gymitem:[]
    countresult:number
}

  const Pc = (props:getBottomItem) => {
        const router = useRouter();
        const [pageState,setPageState]=useState<number>(0)
        const [gridLayout,setGridLayout]=React.useState<string>('grid_1x4')
        const [sortState,setSortState]=useState<number>()

        useEffect(()=>{
            if(props.countresult==0){
                setGridLayout('')
            }
            else if(props.countresult<5){
                setGridLayout('grid_1x4')
            }
            else if(props.countresult<9){
                setGridLayout('grid_2x4')
            }
            else if(props.countresult<13){
                setGridLayout('grid_3x4')
            }
            else if(props.countresult<17){
                setGridLayout('grid_4x4')
            }
            else{
                setGridLayout('grid_5x4')
            }
          },)
    return(
        <div id={styles.pc_bottomContainer} className={`${styles.flex_row}`}>
            <div id={styles.pc_bottomLeftBox}></div>
            <div id={styles.pc_bottomCenterBox}>
                <div id={styles.pc_bottomCenterMarginBox} className={`${styles.text_set_center}`}>Bottom</div>
                <div id={styles.pc_bottomCenterSortBox} className={`${styles.text_set_center}`}>
                    <div id={styles.pc_bottomCenterSortItems} className={sortState===0 ? styles.color_blue : "" }
                    onClick={()=>{
                        setSortState(0)
                        router.push(`/bottomPage?sort=all&page=1`)
                        }}>All</div>
                    <div id={styles.pc_bottomCenterSortItems} className={sortState===1 ? styles.color_blue : ""} 
                    onClick={()=>{
                        setSortState(1)
                        router.push(`/bottomPage?sort=반바지&page=1`)
                        }}>Short Pants</div>
                    <div id={styles.pc_bottomCenterSortItems} className={sortState===2 ? styles.color_blue : ""}
                    onClick={()=>{
                        setSortState(2)
                        router.push(`/bottomPage?sort=긴바지&page=1`)
                        }}>Long Pants</div>
                </div>
                <div id={styles.pc_bottomContentBox} className={styles[gridLayout]}>
                   {props.gymitem.map((object:gymWearItem, index:number) => (
                        <span key={index} id={styles.pc_bottomItem_itemComponent} className={`${styles.padding_3} ${styles.flex_column}`}>
                            <span id={styles.pc_bottomItem_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.pc_bottomItem_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.pc_bottomItem_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.pc_bottomItem_itemName}    
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.pc_bottomItem_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))}
                </div>
                <div id={styles.pc_bottomNumvberNavigateContainer} className={`${styles.flex_row}`}>
                    <div id={styles.pc_bottomNumberLeftBox}></div>
                    <div id={styles.pc_bottomNumberCenterBox} className={`${styles.text_set_center}`}>
                        <div id={styles.pc_bottomNumberMargin}></div>
                        {/* {pageState=== 0 ? (
                            <div className={`${styles.flex_row}`}> 
                                <div>&#60;</div>
                                <div id={styles.pc_bottomNumberNavigatenNumberMargin}></div>
                                <div style={{border:'1px solid',paddingLeft:'0.5rem',paddingRight:'0.5rem'}}>1</div>
                                <div id={styles.pc_bottomNumberNavigatenNumberMargin}></div>
                                <div>2</div>
                                <div id={styles.pc_bottomNumberNavigatenNumberMargin}></div>
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
                                <div id={styles.pc_bottomNumberNavigatenNumberMargin}></div>
                                <div>1</div>
                                <div id={styles.pc_bottomNumberNavigatenNumberMargin}></div>
                                <div style={{border:'1px solid',paddingLeft:'0.5rem',paddingRight:'0.5rem'}}>2</div>
                                <div id={styles.pc_bottomNumberNavigatenNumberMargin}></div>
                                <div>&#62;</div>
                            </div>
                        ) : null} */}
                        
                        <div id={styles.pc_bottomNumberMargin}></div>
                    </div>
                    <div id={styles.pc_bottomNumberRightBox}></div>
                </div>
            </div>
            <div id={styles.pc_bottomRightBox}></div>
        </div>
    )
}
export default Pc