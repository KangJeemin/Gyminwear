import * as React from 'react'
import { motion } from 'framer-motion';
import styles from './pcSearchModal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, ChangeEvent,} from 'react';
import { AuthContext } from '@/public/context/authcontext';
import { useRouter } from 'next/router';

interface pcSearchState {
    pcSearchModalState: number;
    setPcSearchModalState: Function;
}

const PcSearchModal = () => {
    const {searchWord, setSearchWord,setSearchResultText,searchState,setSearchState} = useContext(AuthContext)
    const router = useRouter()
    const pcSetInputText = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value)
        
      }
      const keydown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.keyCode===13){
          router.push(`/searchresult?search=${searchWord}&page=1`)
          setSearchResultText(searchWord)
          setSearchState(0)
        }
      }
      const pcInitializeSearchText = () => {
        setSearchWord("")
      }


    return (
        <motion.div id={styles.pc_searchContainer} className={`${styles.flexRow}`}
        animate={{
            display:searchState===0? 'none' : '',
            opacity:searchState===0 ? [0,0] : searchState=== 1 ? [0,1] : [1,0],
            height: searchState===0 ? '0rem' : searchState=== 1 ? "20rem" : "0rem"
          }}
          transition={{
            duration: searchState===0 ? 0 : searchState===1 ? 0.5 : 0.5, 
            ease: 'easeOut',
          }}
        >
            <div id={styles.pc_searchContainerLeftBox}></div>
            <div id={styles.pc_searchContainerCenterBox} className={`${styles.flexColumn}`}>
                <div id={styles.pc_searchContainerContentTop}></div>
                <div id={styles.pc_searchContainerContentMiddle} className={`${styles.flexRow}`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"2rem",color:"gray",marginLeft: "1rem"}}/>
                    <input id={styles.pc_searchInput} onChange={pcSetInputText} onKeyDown={keydown} value={searchWord} type="text" placeholder='검색어를 입력하세요.'/>
                    <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"2rem",color:"gray",visibility:searchWord===""? "hidden":"visible"}} onClick={pcInitializeSearchText}/>
                </div>
                <div id={styles.pc_searchContainerContentBottom}></div>
            </div>
            <div id={styles.pc_searchContainerRightBox}></div>
        </motion.div>
    )
    
}

export default PcSearchModal