import * as React from 'react'
import styles from './pcSearchModal.module.css'

const PcSearchModal = () => {
    return (
        <div id={styles.pc_searchContainer} className={`${styles.flexRow}`}>
            <div id={styles.pc_searchContainerLeftBox}></div>
            <div id={styles.pc_searchContainerCenterBox} className={`${styles.flexColumn}`}>
                <div id={styles.pc_searchContainerContentTop}></div>
                <div id={styles.pc_searchContainerContentMiddle}></div>
                <div id={styles.pc_searchContainerContentBottom}></div>
            </div>
            <div id={styles.pc_searchContainerRightBox}></div>
        </div>
    )
    
}

export default PcSearchModal