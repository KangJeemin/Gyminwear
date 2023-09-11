
import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import styles from '../src/component/middle/searchResultComponent/searchResultComponent.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from '@/public/context/authcontext';
import Image from 'next/image'
import convertWon from '@/pages/src/module/convertWon';
import axios from 'axios';
import type { gymWearItem } from '../../src/type/gymwear';
import { GetServerSideProps,GetServerSidePropsContext } from 'next';
import NumberNavigate from '../src/component/middle/searchResultComponent/numberNavigate';

interface gymwear{
    data:gymWearItem;
}

const Index = ({item}:any,{count}:any) => { 
    
    const target = useRef<HTMLDivElement | null>(null);
    const target1 = useRef<HTMLDivElement | null>(null);
    const target2 = useRef<HTMLDivElement | null>(null);
    const router = useRouter();
    const idx = router.query.id
    
    const [viewState,setViewState]=useState<boolean>(false)
    const [inputState, setInputState] = useState<string>("")
    const {hambergerState,searchState,searchWord,searchResultData,setSearchResultData,setSearchWord,searchResultDataSort20,setSearchResultDataSort20} = useContext(AuthContext)
    const [searchResultCount, setSearchResultCount]= useState<number>(0);
    const searchDataAPI = (pagenumber:number) => {
        router.push(`/searchresult?search=${searchWord}&page=${pagenumber}`)
    }
    const keydown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.keyCode===13){
          setSearchWord(inputState)
          setViewBlurryOut()
        }
      }
    const setInputText = (e:ChangeEvent<HTMLInputElement>) => {
      setInputState(e.target.value);
      console.log(inputState)
    }
  
    const initializeSearchText = () => {
      setInputState("")
    }
    const setViewBlurry = () => {
    
        if(viewState===false){
            if(target.current){
                target.current.style.filter='blur(5px)'
            }
            if(target1.current){
                target1.current.style.filter='blur(5px)'
            }
            if(target2.current){
                target2.current.style.filter='blur(5px)'
            }
            setViewState(true)
        }
    }
    const setViewBlurryOut = () => {
        if(viewState===true){
            if(target.current){
                target.current.style.filter='none'
            }
            if(target1.current){
                target1.current.style.filter='none'
            }
            if(target2.current){
                target2.current.style.filter='none'
            }
            setViewState(false)
        }
    }
    useEffect(()=>{
    },[item,count])
  return (
    <div id={styles.searchResultComponent}>
        <div id={styles.searchResultComponent_searchContainer}>
            <div id={styles.searchResultComponent_searchIconContainer}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"2em",color:"gray",}}/>
            </div>
            <div id= {styles.searchResultComponent_deleteIconContainer}>
                <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"2em",color:"gray",visibility:inputState===""? "hidden":"visible"}} onClick={initializeSearchText}/>
            </div>
            <input id={styles.searchResultComponent_search} onChange={setInputText} onKeyDown={keydown} value={inputState} type="test" onFocus={setViewBlurry} onBlur={setViewBlurryOut}/>
        </div>
        <div id={styles.searchResultComponent_topText}>
          <h1 id={styles.searchResultComponent_text} ref={target1}>	&#39;{searchWord}&#39;에 대한 개의 검색 결과를 발견했습니다.</h1>
        </div>
            <div id={styles.searchResultComponent_itemContainer} className={`${styles.grid_1x2} ${styles.flex_scrollSet}`} ref={target2}>
                     {item.map((object:gymWearItem, index:number) => (
                        <span key={index} id={styles.searchResultComponent_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                            <span id={styles.searchResultComponent_item_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.searchResultComponent_item_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.searchResultComponent_item_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.searchResultComponent_item_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.searchResultComponent_item_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))}
        </div>
        <NumberNavigate number={searchResultCount} pageMove={searchDataAPI}/>
    </div>
    
  );
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { search, page } = context.query;
    const res = await fetch(`http://localhost:3000/api/search?search=${search}&page=${page}`);
    const data = await res.json();
    console.log(data)
    return { props: { 
        item:data.result,
        count:data.countresult
     } };
  }
  

export default Index;

