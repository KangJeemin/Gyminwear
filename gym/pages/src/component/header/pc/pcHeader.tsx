import { motion } from 'framer-motion';
import * as React from 'react';
import styles from './pcHeader.module.css'
import { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Logo from '../../../../../public/image/gyminwearLogo.png'
import { useRouter } from 'next/router';


const PcHeader = () => {
    const router=useRouter();
    return(
    <div id={styles.pc_headerContainer} className={`${styles.flexRow}`}>
        <div id={styles.pc_headerLeftBox}></div>
        <div id={styles.pc_headerCenterBox} className={`${styles.flexRow}`}>
            <div id={styles.pc_headerLogoBox} onClick={()=>{
                router.push('/')
            }}>
                <Image 
                    src={Logo} 
                    alt='이미지 표시 불가'
                    layout='fill'                        
                />
            </div>
            <div id={styles.pc_headerTopBox} className={`${styles.setTextCenter}`} onClick={()=>{
                router.push(`/topPage?page=1`)
            }}>Top</div>
            <div id={styles.pc_headerBottomBox} className={`${styles.setTextCenter}`} onClick={()=>{
                router.push(`/bottomPage?page=1`)
            }}>Bottom</div>
            <div id={styles.pc_headerxxxBox}></div>
            <div id={styles.pc_headerSearchBox}>
                <FontAwesomeIcon  icon={faSearch} style={{fontSize:"1.5em",color:"black"}}/>
            </div>
        </div>
        <div id={styles.pc_headerRightBox}></div>
    </div>
    )
}

export default PcHeader