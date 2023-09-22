import * as React from 'react'
import styles from './pcSearchModal.module.css'

const PcSearchModal = () => {
    return (
        <div id={styles.pc_searchContainer}>
            <div id={styles.pc_searchContainerLeftBox}></div>
            <div id={styles.pc_searchContainerCenterBox}></div>
            <div id={styles.pc_searchContainerRightBox}></div>

        </div>
    )
    
}