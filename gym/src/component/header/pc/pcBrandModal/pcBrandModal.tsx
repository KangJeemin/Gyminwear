import * as React from 'react'
import styles from './index.module.css'
import { animate, motion } from 'framer-motion';
import { TurnLeft } from '@mui/icons-material';
import { AuthContext } from '@/public/context/authcontext';


const PcBrandModal= () => {
    const {brandModalState} = React.useContext(AuthContext)
    
    return(
        <motion.div id={styles.pc_brandNameModalComponent} 
        animate={{
            height:brandModalState===true ? "20rem" : "0rem",
        }}
        transition={{
            duration:0.5,
        }}
        >
            <div id={styles.pc_brandNameModalMarginBox}></div>
            <motion.div id={styles.pc_brandNameModalCenterBox}>
                <div id={styles.pc_brandNameModalMarginBox2}></div>
                <div id={styles.pc_brandNameModalBrandBox}>
                    <ul className={styles.ulStyle}>
                        <li className={styles.liStyle}>피지컬크라운</li>
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