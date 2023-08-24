import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import styles from './searchResultComponent.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from '@/public/context/authcontext';
interface Item {
  brandName: string;
  itemName: string;
  itemPrice: number | string;
}

const SearchResult: React.FC = () => { 
    const target = useRef<HTMLDivElement | null>(null);
    const target1 = useRef<HTMLDivElement | null>(null);
    const target2 = useRef<HTMLDivElement | null>(null);

    const [viewState,setViewState]=useState<boolean>(false)
    const [inputState, setInputState] = useState<string>("")
    const {hambergerState,searchState,searchWord} = useContext(AuthContext)


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
    const searchDataAPI = () =>{
        fetch('/api/search?sort=name')
      }
  const items:Item[] =[
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin1",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin2",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin3",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin4",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin5",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin6",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin7",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin8",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin9",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin10",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin11",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin12",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin13",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin14",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin15",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },    
 ]
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
          <h1 id={styles.searchResultComponent_text} ref={target1}>	&#39;	&#39;에 대한 00개의 검색 결과를 발견했습니다.</h1>
        </div>
            <div id={styles.searchResultComponent_itemContainer} className={`${styles.grid_8x2} ${styles.flex_scrollSet}`} ref={target2}>
            {items.map((item, index) => (
                <span key={index} id={styles.searchResultComponent_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}` }>
                <span id={styles.searchResultComponent_item_imageSize}></span>
                <span id={styles.searchResultComponent_item_textBoxSize} className={`${styles.flex_column}`}>
                    <span id={styles.searchResultComponent_item_itemBrandName}><h1>{item.brandName}</h1></span>
                    <span id={styles.searchResultComponent_item_itemName}><h2>{item.itemName}</h2></span>
                    <span id={styles.searchResultComponent_item_itemPrice}><h3>{item.itemPrice}</h3></span>
                </span>
                </span>
                ))}
        </div>
        <div id ={styles.searchResultComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`} ref={target}>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}>1/3</span>
                        
                <span className={`${styles.width_15per} ${styles.text_set_center}`} onClick={()=>{
                }}>&#62;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}>&#187;</span>
        </div>
    </div>
  );
};

export default SearchResult;
