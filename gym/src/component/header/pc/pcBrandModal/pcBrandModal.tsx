import * as React from 'react'
import styles from './index.module.css'
import { motion } from 'framer-motion';
import { AuthContext } from '@/public/context/authcontext';
import { useRouter } from 'next/router';
import { Opacity } from '@mui/icons-material';


const PcBrandModal= () => {
    const {brandModalState} = React.useContext(AuthContext)
    const router = useRouter()
    
    return(
        <motion.div id={styles.pc_brandNameModalComponent} 
        initial={{
            display:"none",
            opacity:0
        }}
        animate={{
            display:brandModalState===true ? "flex" : "none",
            height:brandModalState===true ? "20rem" : "0rem",
            opacity:brandModalState===true ? 1 : 0
        }}
        transition={{
            // display: { duration: 0.5 },
            duration:0.5,
            ease: "easeOut",
        }}
        >
            <div id={styles.pc_brandNameModalMarginBox}></div>
            <motion.div id={styles.pc_brandNameModalCenterBox}
                animate={{
                    display:brandModalState===true ? "flex" : "none"
                }}
                transition={{
                    delay:0.25,
                    duration:0.5,
                    ease: "easeIn",
                }}  
            >
                <div id={styles.pc_brandNameModalMarginBox2}></div>
                <div id={styles.pc_brandNameModalBrandBox}>
                    <ul className={styles.ulStyle}>
                        <li className={styles.liStyle} onClick={()=>{
                            router.push(`/brandPage?brandname=피지컬크라운&sort=all&page=1`)
                        }}>피지컬크라운</li>
                        <li className={styles.liStyle}>짐브로</li>
                    </ul>
                </div>
                <div id={styles.pc_brandNameModalMarginBox2}></div>
            </motion.div>
            <div id={styles.pc_brandNameModalMarginBox}></div>
        </motion.div>
    )
}


export default PcBrandModal;