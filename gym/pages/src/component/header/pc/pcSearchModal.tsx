import * as React from 'react'
import styles from './pcSearchModal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
interface pcSearchState {
    state: number;
}

const PcSearchModal = (props:pcSearchState) => {

    return (
        <div id={styles.pc_searchContainer} className={`${styles.flexRow}`}>
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
        </div>
    )
    
}

export default PcSearchModal