import * as React from 'react';
import styles from './pcMain.module.css'
import Image from 'next/image';


const PcTop = () => {
    return(
        <div id={styles.pc_topContainer}>
            <div id={styles.pc_topLeftBox}></div>
            <div id={styles.pc_topCenterBox}>
                <div id={styles.pc_topCenterMarginBox}></div>
                <div id={styles.pc_topContentBox}></div>
                <div></div>
            </div>
            <div id={styles.pc_topRightBox}></div>
        </div>
    )
}

export default PcTop