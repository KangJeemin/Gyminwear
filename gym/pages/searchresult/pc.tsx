
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
import PcNumberNavigate from '../src/component/middle/pc/pcNumberNavigate/pcNumberNavigate'


interface gymwear{
    data:gymWearItem;
    count: number
}

const Pc = ({item,count}:SearchResultProps) => { 
    const router = useRouter()
    const {searchWord,setSearchWord,searchResultText,setSearchResultText} = useContext(AuthContext)
    const [reSearchWord,setReSearchWord]=useState<string>('')
    const pcSetInputText = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value)
      }
      const keydown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.keyCode===13){
          router.push(`/searchresult?search=${searchWord}&page=1`)
          setSearchResultText(searchWord)
          
        }
      }
      const pcInitializeSearchText = () => {
        setSearchWord("")
      }

    return(
        <div id={styles.pc_searchResultContainer} className={`${styles.flex_row}`}>
            <div id={styles.pc_searchResultLeftBox}></div>
            <div id={styles.pc_searchResultCenterbox} className={`${styles.flex_column}`} >
            <div id={styles.pc_searchResultMarginBox}></div>
                <div id={styles.pc_searchResultTextBox}>
                    <h2>&#39; {searchResultText} &#39; 에 대한 {count}개의 검색결과.</h2>
                </div>
                <div id={styles.pc_searchResultMarginBox}></div>
                <div id={styles.pc_searchResultInputBox} className={`${styles.flex_row}`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"2rem",color:"gray",marginLeft: "2rem"}}/>
                    <input id={styles.pc_searchResultInput} type="search" onChange={pcSetInputText} onKeyDown={keydown} value={searchWord} placeholder='검색어를 입력하세요'/>
                    <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"2rem",color:"gray",visibility:searchWord===""? "hidden":"visible"}} onClick={pcInitializeSearchText}/>
                </div>
                <div id={styles.pc_searchResultMarginBox}></div>
                <div id={styles.pc_searchResultItemBox} className={`${styles.grid_5x4} ${styles.flex_scrollSet}`}>
                    {item.map((object:gymWearItem, index:number) => (
                            <span key={index} id={styles.pc_searchResult_Item_itemComponent} className={`${styles.padding_3} ${styles.flex_column}`}>
                                <span id={styles.pc_searchResult_Item_imageSize}>
                                    <Image
                                        src={object.image}
                                        alt='이미지 표시 불가'
                                        layout='fill'
                                        onClick={()=>{
                                            router.push(`${object.url}`)
                                        }}
                                        />
                                </span>
                                <span id={styles.pc_searchResult_Item_textBoxSize} className={`${styles.flex_column}`}>
                                    <span id={styles.pc_searchResult_Item_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                    <span id={styles.pc_searchResult_Item_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                    <span id={styles.pc_searchResult_Item_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                                </span>
                            </span>
                        ))}
                </div>
                <PcNumberNavigate number={count}/>
            </div>
            <div id={styles.pc_searchResultRightBox}></div>
        </div>
    )
}
  

export default Pc;

