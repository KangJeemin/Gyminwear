import * as React from 'react'
import { motion } from 'framer-motion';
import styles from './pcSearchModal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface pcSearchState {
    state: number;
    setState: Function;
}

const PcSearchModal = (props:pcSearchState) => {

    return (
        <motion.div id={styles.pc_searchContainer} className={`${styles.flexRow}`}
        animate={{
            opacity:props.state===0 ? [0,0] : props.state=== 1 ? [0,1] : [1,0],
            height: props.state===0 ? ['0rem','23rem'] : props.state=== 1 ? ['0rem','23rem'] : ['23rem','0rem']
          }}
          transition={{
            duration: props.state===0 ? 0 : props.state===1 ? 0.5 : 0.5, 
            times:props.state===0 ? [0,0] : props.state===1 ? [0,1] : [0,1],
            ease: 'easeOut',
          }}
        onMouseLeave={()=>{props.setState(2)}}>
            <div id={styles.pc_searchContainerLeftBox}></div>
            <div id={styles.pc_searchContainerCenterBox} className={`${styles.flexColumn}`}>
                <div id={styles.pc_searchContainerContentTop}></div>
                <div id={styles.pc_searchContainerContentMiddle} className={`${styles.flexRow}`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"2rem",color:"gray",marginLeft: "1rem"}}/>
                    <input id={styles.pc_searchInput} type="text" placeholder='검색어를 입력하세요.'/>
                    <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"2rem",color:"gray"}}/>
                </div>
                <div id={styles.pc_searchContainerContentBottom}></div>
            </div>
            <div id={styles.pc_searchContainerRightBox}></div>
        </motion.div>
    )
    
}

export default PcSearchModal