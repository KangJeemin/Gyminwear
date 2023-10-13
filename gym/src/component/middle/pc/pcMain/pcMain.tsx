import * as React from 'react';
import styles from './pcMain.module.css'
import Image from 'next/image';
import gbroLogo from '../../../../../public/image/gbro/gbroLogo.jpg'
import PcSlide from '../pcSlide/pc';
import PcCard1 from '../pcCard/pcCard1';
import Image1 from '@/public/image/mainImage/Image1.jpg'
import Image2 from '@/public/image/mainImage/Image2.jpg'
import type { GymItemProps,gymWearItem } from '@/src/type/gymwear';
const PcMain = (props:GymItemProps) => {


    return(
        <div id={styles.pc_mainContainer} className={`${styles.flexColumn}`}>
            <div id={styles.pc_mainImageContainer} className={`${styles.flexRow}`}>
                <div id={styles.pc_mainImageContainerLeftBox}></div>
                <PcSlide/>  
                <div id={styles.pc_mainImageContainerRightBox}></div>
            </div>
            <div id={styles.pc_mainImagemargin}></div>
            <div id={styles.pc_mainImage1Container} className={`${styles.flexRow}`}>
                <div id={styles.pc_mainImage1Box}></div>
                <div id={styles.pc_mainImage1}>
                    <Image
                        src={Image2}
                        alt="이미지를 표시 할 수 없음"
                        layout='fill'
                    />
                </div>
                <div id={styles.pc_mainImage1Text}>
                    <h1>짐인웨어는 당신의 꿈을 응원합니다.</h1>
                </div>
                <div id={styles.pc_mainImage1Box}></div>
            </div>
            <div id={styles.pc_mainImage2}>
                <PcCard1 gymitem={props.gymitem}/>
            </div>
            <div id={styles.pc_mainImagemargin}></div>
            <div id={styles.pc_mainImage3}>
                컨텐츠 준비 중 입니다.
            </div>
        </div>
    )
}

export default PcMain