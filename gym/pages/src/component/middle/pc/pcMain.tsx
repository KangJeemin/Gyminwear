import * as React from 'react';
import styles from './pcMain.module.css'
import Image from 'next/image';


const PcMain = () => {
    return(
        <div id={styles.pc_mainContainer} className={`${styles.flexColumn}`}>
            <div id={styles.pc_mainImageContainer} className={`${styles.flexRow}`}>
                <div id={styles.pc_mainImageContainerLeftBox}></div>
                <div id={styles.pc_mainImageContainerImageBox} className={`${styles.flexRow}`}>
                    <div id={styles.pc_mainImageContainerImageBoxLeftButton}></div>
                    <div id={styles.pc_mainImageContainerImageBoxImage}></div>
                    <div id={styles.pc_mainImageContainerImageBoxRightButton}></div>
                </div>
                <div id={styles.pc_mainImageContainerRightBox}></div>
            </div>
            <div id={styles.pc_mainImagemargin}></div>
            <div id={styles.pc_mainImage2}></div>
            <div id={styles.pc_mainImagemargin}></div>
            <div id={styles.pc_mainImage3}></div>
        </div>
    )
}

export default PcMain