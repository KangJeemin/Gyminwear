import * as React from 'react';
import styles from './index.module.css'
import Image from 'next/image';


const PcSlide = () => {
    return(
        <div id={styles.pc_mainContainer} className={`${styles.flexColumn}`}>
            <div id={styles.pc_mainImageContainer} className={`${styles.flexRow}`}>
                <div id={styles.pc_mainImageContainerLeftBox}></div>
                <div id={styles.pc_mainImageContainerImageBox} className={`${styles.flexRow}`}>
                    <div id={styles.pc_mainImageContainerImageBoxLeftButton} className={`${styles.setTextCenter}`}>&#60;</div>
                    <div id={styles.pc_mainImageContainerImageBoxImage}>
                        <div style={{width:"100%",height:"20%"}}></div>
                        <div id={styles.pc_mainImageText}  className={`${styles.setTextCenter}`}> 유행하는 짐웨어,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_mainImageText}  className={`${styles.setTextCenter}`}> 오버핏 짐웨어,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_mainImageText}  className={`${styles.setTextCenter}`}> 짐인웨어에서 확인해 보세요.</div>
                        <div style={{width:"100%",height:"20%"}}></div>
                    </div>
                    <div id={styles.pc_mainImageContainerImageBoxRightButton} className={`${styles.setTextCenter}`}>&#62;</div>
                </div>
                <div id={styles.pc_mainImageContainerRightBox}></div>
            </div>
            <div id={styles.pc_mainImagemargin}></div>
            <div id={styles.pc_mainImage2}>
                <Image
                    src={gbroLogo}
                    alt='이미지 표시 불가'
                    layout='fixed'
                    width={1280}
                    height={480}
                />
            </div>
            <div id={styles.pc_mainImagemargin}></div>
            <div id={styles.pc_mainImage3}></div>
        </div>
    )
}

export default PcSlide