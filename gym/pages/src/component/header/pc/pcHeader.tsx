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
    <div id={styles.pcHeaderContainer}>
        <div id={styles.pcHeaderLeftBox}></div>
        <div id={styles.pcHeaderCenterBox}>
            <div id={styles.pcHeaderLogoBox}></div>
            <div id={styles.pcHeaderTopBox}></div>
            <div id={styles.pcHeaderBottomBox}></div>
            <div id={styles.pcHeaderxxxBox}></div>
            <div id={styles.pcHeaderSearchBox}></div>
        </div>
        <div id={styles.pcHeaderRightBox}></div>
    </div>
    )
}

export default PcHeader