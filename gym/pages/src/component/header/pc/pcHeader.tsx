import { motion } from 'framer-motion';
import * as React from 'react';
import styles from './pcHeader.module.css'
import { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Logo from '../../../../../public/image/gyminwearLogo.png'
import { style } from '@mui/system';


const PcHeader = () => {
    <div id={styles.pc_headerContainer}>
        <div id={styles.pc_headerLeftBox}></div>
        <div id={styles.pc_headerCenterBox}>
            <div id={styles.pc_headerLogoBox}></div>
            <div id={styles.pc_headerTopBox}></div>
            <div id={styles.pc_headerBottomBox}></div>
            <div id={styles.pc_headerxxxBox}></div>
            <div id={styles.pc_headerSearchBox}></div>
        </div>
        <div id={styles.pc_headerRightBox}></div>
    </div>

}

export default PcHeader