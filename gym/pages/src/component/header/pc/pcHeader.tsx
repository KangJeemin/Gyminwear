import { motion } from 'framer-motion';
import * as React from 'react';
import styles from './pcHeader.module.css'
import { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Logo from '../../../../../public/image/gyminwearLogo.png'


const PcHeader = () => {
    return(
    <div id={styles.pc_headerContainer} className={`${styles.flexRow}`}>
        <div id={styles.pc_headerLeftBox}>ㅁ</div>
        <div id={styles.pc_headerCenterBox}>
            <div id={styles.pcHeaderLogoBox}>ㅁ</div>
            <div id={styles.pc_headerTopBox}></div>
            <div id={styles.pc_headerBottomBox}></div>
            <div id={styles.pc_headerxxxBox}></div>
            <div id={styles.pc_headerSearchBox}></div>
        </div>
        <div id={styles.pc_headerRightBox}>ㅊ</div>
    </div>
    )
}

export default PcHeader