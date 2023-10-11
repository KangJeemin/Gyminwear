import * as React from 'react';
import styles from './pcMain.module.css'
import Image from 'next/image';
import gbroLogo from '../../../../../public/image/gbro/gbroLogo.jpg'
import PcSlide from '../pcSlide/pc';

const PcMain = () => {
    return(
        <div id={styles.pc_mainContainer} className={`${styles.flexColumn}`}>
            <div id={styles.pc_mainImageContainer} className={`${styles.flexRow}`}>
                <div id={styles.pc_mainImageContainerLeftBox}></div>
                <PcSlide/>  
                <div id={styles.pc_mainImageContainerRightBox}></div>
            </div>
            <div id={styles.pc_mainImagemargin}></div>
            <div id={styles.pc_mainImage2}>
                {/* <Image
                    src={gbroLogo}
                    alt='이미지 표시 불가'
                    layout='fixed'
                    width={1280}
                    height={480}
                /> */}
                컨텐츠 준비 중 입니다.
            </div>
            <div id={styles.pc_mainImagemargin}></div>
            <div id={styles.pc_mainImage3}>
                컨텐츠 준비 중 입니다.
            </div>
        </div>
    )
}

export default PcMain