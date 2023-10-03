import * as React from 'react';
import styles from './index.module.css'
import Image from 'next/image';


const PcSlide = () => {
    return(
            <div id={styles.pc_slideContainerImageBox} className={`${styles.flexRow}`}>
                <div id={styles.pc_slideContainerImageBoxLeftButton} className={`${styles.setTextCenter}`}>&#60;</div>
                <div id={styles.pc_slideContainerImageBoxImage} className={`${styles.flexRow}`}>
                    <div id={styles.pc_slideComponent}>
                        <div id={styles.pc_slide1} >
                            <div style={{width:"100%",height:"20%"}}></div>
                            <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> 유행하는 짐웨어,</div>
                            <div style={{width:"100%"}}></div>
                            <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> 오버핏 짐웨어,</div>
                            <div style={{width:"100%"}}></div>
                            <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> 짐인웨어에서 확인해 보세요.</div>
                            <div style={{width:"100%",height:"20%"}}></div>
                        </div>
                        <div id={styles.pc_slide2} >
                            <div style={{width:"100%",height:"20%"}}></div>
                            <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> abc,</div>
                            <div style={{width:"100%"}}></div>
                            <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> def,</div>
                            <div style={{width:"100%"}}></div>
                            <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> ghi.</div>
                            <div style={{width:"100%",height:"20%"}}></div>
                        </div>
                    </div>
                </div>
                <div id={styles.pc_slideContainerImageBoxRightButton} className={`${styles.setTextCenter}`}>&#62;</div>
            </div>
    )
}

export default PcSlide