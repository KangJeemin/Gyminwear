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
                    <div id={styles.pc_mainImageContainerImageBoxImage}>
                        <div style={{width:"100%",height:"20%"}}></div>
                        <div id={styles.pc_mainImageText}  className={`${styles.setTextCenter}`}> 유행하는 짐웨어,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_mainImageText}  className={`${styles.setTextCenter}`}> 오버핏 짐웨어,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_mainImageText}  className={`${styles.setTextCenter}`}> 잠인웨어에서 확인해 보세요.</div>
                        <div style={{width:"100%",height:"20%"}}></div>
                    </div>
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