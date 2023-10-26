import React from 'react'
import styles from './index.module.css';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

type brandListState = {
    brandListState:boolean
}

const BrandList = (props:brandListState) => {
    const router = useRouter();
    return(
        <motion.div id={styles.brandListContainer} style={{
            
        }}
        animate={{
            height:props.brandListState ? "500px" : "0px"
        }}
        transition={{
            times:1,
            ease: "easeInOut",
        }}
        >
            <ul>
                <li id={styles.brandListBrandName} onClick={()=>{router.push(`/brandPage?brandname=피지컬크라운&sort=all&page=1`)}}>피지컬크라운</li>
                <li id={styles.brandListBrandName} onClick={()=>{router.push(`/brandPage?brandname=짐브로&sort=all&page=1`)}}>짐브로</li>
                <li id={styles.brandListBrandName} onClick={()=>{router.push(`/brandPage?brandname=짐브로&sort=all&page=1`)}}>짐브로</li>
                <li id={styles.brandListBrandName} onClick={()=>{router.push(`/brandPage?brandname=짐브로&sort=all&page=1`)}}>짐브로</li>
                <li id={styles.brandListBrandName} onClick={()=>{router.push(`/brandPage?brandname=짐브로&sort=all&page=1`)}}>짐브로</li>
            </ul>
            
            
        </motion.div>
    )
}

export default BrandList;