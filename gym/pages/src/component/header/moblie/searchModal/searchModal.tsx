import { motion } from 'framer-motion';
import styles from './searchModal.module.css'
import { AuthContext } from '../../../../../../public/context/authcontext';
import { useContext, useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
import Link from 'next/link';


const SearchModal = () => {
  const {searchState,setSearchWord,setSearchState,setState,searchWord,setHambergerState,setSearchResultText} = useContext(AuthContext)
  const [inputState, setInputState] = useState<string>("")
  const router = useRouter();

  const setInputText = (e:ChangeEvent<HTMLInputElement>) => {
    
    setSearchWord(e.target.value)
  }
  const keydown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.keyCode===13){
      // setSearchWord(inputState)
      router.push(`/searchresult?search=${searchWord}&page=1`)
      setState(0)
      setSearchState(0)
      setSearchResultText(searchWord)
      
    }
  }
  const initializeSearchText = () => {
    setSearchWord("")
  }
  const searchDataAPI = () =>{
    fetch('/api/search',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // 데이터 타입을 JSON으로 지정
      },
      body: JSON.stringify(inputState), // JSON 형식으로 데이터 전송
    })
  }

  return (
    <motion.div
    style={{
        position: 'fixed',
        top: '5vh',
        left: 0,
        width: '100vw',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity:0,
        zIndex:searchState === 1 ? 2 : 0,

      }}
      animate={{
        opacity:searchState===0 ? [0,0] : searchState=== 1 ? [0,1] : [1,0],
        height: searchState===0 ? ['0vh','0vh'] : searchState=== 1 ? ['0vh','95vh'] : ['95vh','0vh']
      }}
      transition={{
        duration: searchState===0 ? 0 : searchState===1 ? 0.5 : 0.5, 
        times:searchState===0 ? [0,0] : searchState===1 ? [0,1] : [0,1],
        ease: 'easeOut',
      }}
    >
    <div id={styles.searchContainer}>
        <div id={styles.searchBoxLeft}></div>
        <div id={styles.searchBoxCenter}>
            <div id={styles.searchBox}>
                <div id= {styles.searchBoxIcon}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"2em",color:"gray"}}/>
                </div>
                <input id={styles.searchBoxInput} type="text" onChange={setInputText} onKeyDown={keydown} value={searchWord} placeholder="검색" />
                <div id= {styles.searchBoxDelete}>
                <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"1.5em",color:"gray",visibility:searchWord===""? "hidden":"visible"}} onClick={initializeSearchText}/>
                </div>
            </div>
            {/* <h1 id={styles.searchRecentTextBox}>최근 검색어</h1>
            <div id={styles.searchRecentLogContainer}>
                <div id={styles.searchRecentLogBox}>
                    <div id={styles.searchRecentLogs}>덤브스트럭</div>
                    <div id={styles.searchRecentLogDelete}>x</div>
                </div>
            </div> */}
        </div>
        <div id={styles.searchBoxRight}></div>
    </div>
        
     
    </motion.div>
  );
};
export default SearchModal;