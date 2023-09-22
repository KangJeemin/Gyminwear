import * as React from 'react'
import styles from './pcSearchModal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const PcSearchModal = () => {
    return (
        <div id={styles.pc_searchContainer} className={`${styles.flexRow}`}>
            <div id={styles.pc_searchContainerLeftBox}></div>
            <div id={styles.pc_searchContainerCenterBox} className={`${styles.flexColumn}`}>
                <div id={styles.pc_searchContainerContentTop}></div>
                <div id={styles.pc_searchContainerContentMiddle}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"2em",color:"gray"}}/>
                    <input type="text" />
                    <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"2em",color:"gray"}}/>
                </div>
                <div id={styles.pc_searchContainerContentBottom}></div>
            </div>
            <div id={styles.pc_searchContainerRightBox}></div>
        </div>
    )
    
}

export default PcSearchModal