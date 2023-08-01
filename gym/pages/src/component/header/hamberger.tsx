import { motion } from 'framer-motion';
import * as React from 'react';
import styles from './header.module.css'
import Image from 'next/image'
import searchIcon from '../../../../public/image/search.png'
import shoppingIcon from '../../../../public/image/shopingBag.png'
import hambergerIcon from '../../../../public/image/hamberger.png'



const Hamberger = () => {
const [state,setState] = React.useState(false)

    if(!state){
    return (
        <div id={styles.header} className={`${styles.flexColumn}`}>
            <div id={styles.categoryBox} className={`${styles.flexRow}`}>
                <div id={styles.logoBox}></div>
                <div id={styles.centerBox}></div>
                <div id={styles.menuBox}>
                    <div id ={styles.searchBox} className={styles.menuBoxMargin}>
                        <Image
                            src={searchIcon}
                            alt="검색아이콘"
                            layout='fill'
                        />
                    </div>
                    <div id ={styles.shoppingBox} className={styles.menuBoxMargin}>
                        <Image
                            src={shoppingIcon}
                            alt="쇼핑백아이콘"
                            layout='fill'
                        />
                    </div>
                    <div id ={styles.hambergerBox} className={styles.menuBoxMargin}>
                        <Image
                            src={hambergerIcon}
                            alt="햄버거아이콘"
                            layout='fill'
                        />
                    </div>
                </div>
            </div>
            <div id={styles.announcement}>
                <p style={
                    {
                        color:'red',
                    }
                }>오늘의 공지사항!</p>
            </div>
        </div>
    
    // <div
    // style={{
    //     display:'flex',
    //     flexDirection:'column',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     width:"100px",
    //     height:"100px",
    //     position: 'relative'
        
    // }}>
    // <motion.div
    //     style={{
    //         width:"30px",
    //         height:"5px",
    //         backgroundColor:"blue",
    //         position: 'absolute'
    //     }}
    //     animate={{
    //         scale:[1,1],
    //         rotate:[0,45]
    //     }}
    //     transition={{
    //         duration: 1,
    //         ease: "liner",
    //         times: [0, 0.5],
    //         repeat: 1,
            
    //       }}
    // />
    // <motion.div
    //     style={{
    //         width:"30px",
    //         height:"5px",
    //         backgroundColor:"blue",
    //         position: 'absolute'
    //     }}
    //     animate={{
    //         scale:[1,1],
    //         rotate:[0,-45]
    //     }}
    //     transition={{
    //         duration: 1,
    //         ease: "liner",
    //         times: [0, 0.5],
    //         repeat: 1,

    //       }}
    // />
    // </div>
   )
            }
}

export default Hamberger