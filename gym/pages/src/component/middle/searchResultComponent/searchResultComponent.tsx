import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import styles from './searchResultComponent.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from '@/public/context/authcontext';
import Image from 'next/image'

const SearchResult: React.FC = () => { 
    const target = useRef<HTMLDivElement | null>(null);
    const target1 = useRef<HTMLDivElement | null>(null);
    const target2 = useRef<HTMLDivElement | null>(null);

    const [viewState,setViewState]=useState<boolean>(false)
    const [inputState, setInputState] = useState<string>("")
    const {hambergerState,searchState,searchWord,searchResultData,setSearchResultData} = useContext(AuthContext)
    const [searchResultCount, setSearchResultCount]= useState<number>(0);
    


    const setInputText = (e:ChangeEvent<HTMLInputElement>) => {
      setInputState(e.target.value);
      console.log(inputState)
    }
  
    const initializeSearchText = () => {
      setInputState("")
    }
    const router = useRouter();
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
    const searchDataAPI = async () =>{
        // const response = axios.get(`/api/search?result=${searchWord}`)
        // console.log(response)
        
         await fetch(`/api/search?result=${searchWord}`)
                .then(res=> res.json())
                .then(data=>{
                    setSearchResultData(data.result)
                    setSearchResultCount(data.result.length)
                    console.log(data.result.length)
                })
            }

    useEffect(()=>{
        searchDataAPI()
    },[searchWord])

  return (
    <div id={styles.searchResultComponent}>
        <div id={styles.searchResultComponent_searchContainer}
         style={{
            zIndex:hambergerState === 1 ? -1 : searchState === 1 ? -1 : 0,
        }}>
            <div id={styles.searchResultComponent_searchIconContainer}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"2em",color:"gray",}}/>
            </div>
            <div id= {styles.searchResultComponent_deleteIconContainer}>
                <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"2em",color:"gray",visibility:inputState===""? "hidden":"visible"}} onClick={initializeSearchText}/>
            </div>
            <input id={styles.searchResultComponent_search} onChange={setInputText} value={inputState} type="text" onFocus={setViewBlurry} onBlur={setViewBlurryOut}/>
        </div>
        <div id={styles.searchResultComponent_topText}>
          <h1 id={styles.searchResultComponent_text} ref={target1}>	&#39;{searchWord}&#39;에 대한 {searchResultCount}개의 검색 결과를 발견했습니다.</h1>
        </div>
            <div id={styles.searchResultComponent_itemContainer} className={`${styles.grid_8x2} ${styles.flex_scrollSet}`} ref={target2}>
                     {searchResultData.map((object, index) => (
                        <span key={index} id={styles.searchResultComponent_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                            <span id={styles.searchResultComponent_item_imageSize}>
                                <Image
                                    style={{
                                        display:hambergerState !=1 && searchState !=1 ? '' : 'none'
                                    }}
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.searchResultComponent_item_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.searchResultComponent_item_itemBrandName}><h4>{object.brandname}</h4></span>
                                <span id={styles.searchResultComponent_item_itemName}><h5>{object.productname}</h5></span>
                                <span id={styles.searchResultComponent_item_itemPrice}><h5>{object.price}</h5></span>
                            </span>
                        </span>
                    ))}
        </div>
        {searchResultCount > 20 ? (
            <div id ={styles.searchResultComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`} ref={target}>
            <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
            <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
            <span className={`${styles.width_15per} ${styles.text_set_center}`}>1/3</span>
                    
            <span className={`${styles.width_15per} ${styles.text_set_center}`} onClick={()=>{
            }}>&#62;</span>
            <span className={`${styles.width_15per} ${styles.text_set_center}`}>&#187;</span>
    </div>
        ): null}
    </div>
  );
};

export default SearchResult;
