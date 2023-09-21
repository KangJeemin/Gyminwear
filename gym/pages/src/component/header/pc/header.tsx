import { motion } from 'framer-motion';
import * as React from 'react';
import styles from './header.module.css'
import { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Logo from '../../../../../public/image/gyminwearLogo.png'


const Header = () => {
    <div id='pc-headerContainer'>
        <div id='pc-headerLeftBox'></div>
        <div id='pc-headerCenterBox'></div>
        <div id='pc-headerRightBox'></div>
    </div>

}

export default Header