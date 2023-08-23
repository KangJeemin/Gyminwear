import { motion } from 'framer-motion';
import styles from './searchModal.module.css'
import { AuthContext } from '../../../../public/context/authcontext';
import { useContext, useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const SearchModal = () => {
  const {searchState} = useContext(AuthContext)
  const [inputState, setInputState] = useState<string>("")

  const setInputText = (e:ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  }
  const keydown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.keyCode===13){
      console.log("a")
    }
  }
  const initializeSearchText = () => {
    setInputState("")
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
                <input id={styles.searchBoxInput} type="text" onChange={setInputText} onKeyDown={keydown} value={inputState} placeholder="검색" />
                <div id= {styles.searchBoxDelete}>
                <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"1.5em",color:"gray",visibility:inputState===""? "hidden":"visible"}} onClick={initializeSearchText}/>
                </div>
            </div>
            <h1 id={styles.searchRecentTextBox}>최근 검색어</h1>
            <div id={styles.searchRecentLogContainer}>
                <div id={styles.searchRecentLogBox}>
                    <div id={styles.searchRecentLogs}>덤브스트럭</div>
                    <div id={styles.searchRecentLogDelete}>x</div>
                </div>
            </div>
        </div>
        <div id={styles.searchBoxRight}></div>
    </div>
        
     
    </motion.div>
  );
};

export default SearchModal;