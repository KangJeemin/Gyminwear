import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import styles from './searchResultComponent.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from '@/public/context/authcontext';
import Image from 'next/image'
import NumberNavigate from './numberNavigate';

const SearchResult: React.FC = () => { 
    const target = useRef<HTMLDivElement | null>(null);
    const target1 = useRef<HTMLDivElement | null>(null);
    const target2 = useRef<HTMLDivElement | null>(null);

    const [viewState,setViewState]=useState<boolean>(false)
    const [inputState, setInputState] = useState<string>("")
    const {hambergerState,searchState,searchWord,searchResultData,setSearchResultData,setSearchWord,searchResultDataSort20,setSearchResultDataSort20} = useContext(AuthContext)
    const [searchResultCount, setSearchResultCount]= useState<number>(0);
    const keydown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.keyCode===13){
          setSearchWord(inputState)
          setViewBlurryOut()
        }
      }
    function splitIntoChunk(arr:string[], chunk:number) {
        const result = [];
        for (let index=0; index < arr.length; index += chunk) {
          let tempArray;
          // slice() 메서드를 사용하여 특정 길이만큼 배열을 분리함
          tempArray = arr.slice(index, index + chunk);
          // 빈 배열에 특정 길이만큼 분리된 배열을 추가
          result.push(tempArray);
        }
        
        return result;
      }

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
    const searchDataAPI = async (page:number) =>{
        // const response = axios.get(`/api/search?result=${searchWord}`)
        // console.log(response)
        
         await fetch(`/api/search?search=${searchWord}&page=${page}`)
                .then(res=> res.json())
                .then(data=>{
                    setSearchResultDataSort20(data.result)
                    setSearchResultCount(data.countresult[0].c)
                    console.log(data)
                })
            }

    useEffect(()=>{
        searchDataAPI(1)
    },[searchWord])
    

    useEffect(()=>{
    },[searchResultDataSort20,searchResultCount])
  return (
    <div id={styles.searchResultComponent}
    style={{

    }}>
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
          <h1 id={styles.searchResultComponent_text} ref={target1}>	&#39;{searchWord}&#39;에 대한 {searchResultCount}개의 검색 결과를 발견했습니다.</h1>
        </div>
            <div id={styles.searchResultComponent_itemContainer} className={`${styles.grid_1x2} ${styles.flex_scrollSet}`} ref={target2}>
                     {searchResultDataSort20.map((object, index) => (
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
                                <span id={styles.searchResultComponent_item_itemPrice} className={styles.text_set_center}><h5>{object.price} ₩</h5></span>
                            </span>
                        </span>
                    ))}
        </div>
        <NumberNavigate number={searchResultCount}/>
    </div>
  );
};

export default SearchResult;
