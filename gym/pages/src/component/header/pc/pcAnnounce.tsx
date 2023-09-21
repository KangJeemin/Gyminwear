import { motion } from 'framer-motion';
import * as React from 'react';
import styles from './pcAnnounce.module.css';

import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Logo from '../../../../../public/image/gyminwearLogo.png'


const PcAnnounce = () => {
    
    return(
        <div id={styles.pc_announceContainer} className={`${styles.flex_row}`}>
            <div id={styles.pc_announceLeftBox}></div>
            <div id={styles.pc_announceCenterBox} className={`${styles.flex_row}`}>
                <div id={styles.pc_announceLeftButton}>&#60;</div>
                <div id={styles.pc_announceText}>덤브스트럭 23 F/W 출시</div>
                <div id={styles.pc_announceRightButton}>&#62;</div>
            </div>
            <div id={styles.pc_announceRightBox}></div>
        </div>
    )
}

export default PcAnnounce