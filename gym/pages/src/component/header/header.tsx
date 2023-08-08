import { motion } from 'framer-motion';
import * as React from 'react';
import styles from './header.module.css'
import Image from 'next/image'
import searchIcon from '../../../../public/image/search.png'
import shoppingIcon from '../../../../public/image/shopingBag.png'
import hambergerIcon from '../../../../public/image/hamberger.png'
import HambergerModal from './hambergerModal';
import SearchModal from './searchModal'
import { useRef } from 'react'
import { AuthContext } from '../../../../public/context/authcontext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { targetModulesByContainer } from '@nestjs/core/router/router-module';
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';


const Header = () => {
const {state,setState, hambergerState, setHambergerState,searchState, setSearchState,announceState,setAnnounceState}= React.useContext(AuthContext)
const searchBoxRef = useRef<HTMLDivElement | null>(null);
const shoppingBoxRef = useRef<HTMLDivElement | null>(null);
const target = useRef<HTMLDivElement | null>(null); 
const scrollX = useScrollXPosition();
const scrollY = useScrollYPosition();
const [announcementOpacity, setAnnouncementOpacity] = React.useState(1);
const [headerHeight, setHeaderHeight] = React.useState(5);

const clickHamberger = ()=> {
    if(state ===0){
        setState(1)
        setHambergerState(1)
        if(searchBoxRef.current){
            searchBoxRef.current.style.visibility = "hidden"
        }
        if(shoppingBoxRef.current){
            shoppingBoxRef.current.style.visibility = "hidden"
        }
    }
    else if(state===1){
        setState(2)
        setHambergerState(2)
        setSearchState(2)
        if(searchBoxRef.current){
            searchBoxRef.current.style.visibility = "visible"
        }
        if(shoppingBoxRef.current){
            shoppingBoxRef.current.style.visibility = "visible"
        }
    }
    else if (state ===2){
        setState(1)
        setHambergerState(1)
        if(searchBoxRef.current){
            searchBoxRef.current.style.visibility = "hidden"
        }
        if(shoppingBoxRef.current){
            shoppingBoxRef.current.style.visibility = "hidden"
        }
    }
    else{
        setState(2)
        setHambergerState(2)
        if(searchBoxRef.current){
            searchBoxRef.current.style.visibility = "visible"
        }
        if(shoppingBoxRef.current){
            shoppingBoxRef.current.style.visibility = "visible"
        }
    }
}
const clickSearch = () => {
    if(state ===0){
        setState(1)
        setSearchState(1)
        if(searchBoxRef.current){
            searchBoxRef.current.style.visibility = "hidden"
        }
        if(shoppingBoxRef.current){
            shoppingBoxRef.current.style.visibility = "hidden"
        }
    }
    else if(state===1){
        setState(2)
        setHambergerState(2)
        setSearchState(2)
        if(searchBoxRef.current){
            searchBoxRef.current.style.visibility = "visible"
        }
        if(shoppingBoxRef.current){
            shoppingBoxRef.current.style.visibility = "visible"
        }
    }
    else if (state ===2){
        setState(1)
        setSearchState(1)
        if(searchBoxRef.current){
            searchBoxRef.current.style.visibility = "hidden"
        }
        if(shoppingBoxRef.current){
            shoppingBoxRef.current.style.visibility = "hidden"
        }
    }
    else{
        setState(2)
        setSearchState(2)
        if(searchBoxRef.current){
            searchBoxRef.current.style.visibility = "visible"
        }
        if(shoppingBoxRef.current){
            shoppingBoxRef.current.style.visibility = "visible"
        }
    }
}

React.useEffect(()=>{
    const handleScroll = () => {
        const scrollPosition = scrollY; // Get the current scroll position
        const maxScroll = 50; // You can adjust this value
  
        // Calculate the opacity based on scroll position
        const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
        setAnnouncementOpacity(opacity);
        const calculatedHeight = Math.max(0, 5 - (scrollPosition / maxScroll) * 5); // Limit between 0 and 5
        setHeaderHeight(calculatedHeight);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      
})
    return (
        <div id={styles.header} className={`${styles.flexColumn}`} >
            <div id={styles.categoryBox} className={`${styles.flexRow}`}>
                <div id={styles.logoBox}></div>
                <div id={styles.centerBox}></div>
                <div id={styles.menuBox}>
                    <div id ={styles.searchBox} className={styles.menuBoxMargin} ref={searchBoxRef} onClick={clickSearch}>
                        <FontAwesomeIcon icon={faSearch} style={{fontSize:"3em",color:"black"}}/>
                    </div>
                    <div id ={styles.shoppingBox} className={styles.menuBoxMargin} ref={shoppingBoxRef}>
                        <Image
                            src={shoppingIcon}
                            alt="쇼핑백아이콘"
                            layout='fill'
                        />
                    </div>
                    <div id ={styles.hambergerBox} className={styles.menuBoxMargin} onClick={clickHamberger}>
                        <div
                        style={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center',
                            width:"100%",
                            height:"100%",
                            position: 'relative'

                        }}>
                        <motion.div
                            style={{
                                width:"25px",
                                height:"2px",
                                marginBottom:state ===1? "0px":"4px",
                                backgroundColor:"black",
                                position: state ===1 ?'absolute' :"relative", 
                            }}

                            animate={{
                                scale: state ===1 ? [1, 1] : [1, 1],
                                rotate: state ===1 ? [0, 45] : [45, 0],
                            }}
                            transition={{
                                duration: state ===0 ? 0 : state===1 ? 0.5 : 0.5,
                                ease: "liner",
                                times: state ===1 ? [0, 0.5] : [0,0.5],
                              }}
                        />
                        <motion.div
                            style={{
                                width:"25px",
                                height:"2px",
                                backgroundColor:"black",
                                position: state ===1 ?'absolute' :"relative", 
                            }}
                            animate={{
                                scale: state ===1 ? [1, 1] : [1, 1],
                                rotate: state ===1 ? [0, -45] : [-45, 0],
                            }}
                            transition={{
                                duration: state ===0 ? 0 : state===1 ? 0.5 : 0.5,
                                ease: "liner",
                                times: state ===1? [0, 0.5] : [0,0.5],
                              }}
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.announcement} style={{
                                            color: 'red',
                                            opacity: announcementOpacity, // Apply the calculated opacity
                                            height: `${headerHeight}vh`, // Apply the calculated header height
                                            transition: 'opacity 0.5s,height 0.5s',
               
            }}>
                <p style={{
                    color: 'red',
                   
                 }}>오늘의 공지사항!</p>
            </div>
            <HambergerModal/>
            <SearchModal/>
        </div>
    
    
   )
}

export default Header