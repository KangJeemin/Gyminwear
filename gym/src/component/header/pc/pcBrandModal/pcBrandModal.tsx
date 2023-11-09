import * as React from 'react'
import styles from './index.module.css'
import { motion } from 'framer-motion';
import { AuthContext } from '@/public/context/authcontext';
import { useRouter } from 'next/router';
import { Opacity } from '@mui/icons-material';


const PcBrandModal= () => {
    const {brandModalState,setBrandModalState,setPcSortState} = React.useContext(AuthContext)
    const router = useRouter()
    const brandList = [
        {id:1,brandname:"피지컬크라운"},
        {id:2,brandname:"짐브로"}, 
     ]
    
    return(
        <motion.div id={styles.pc_brandNameModalComponent} 
        initial={{
            display:"none",
            opacity:0
        }}
        animate={{
            display:brandModalState===0 ? "none" : "flex",
            height:brandModalState===0 ? "0rem": brandModalState===1 ? "20rem" : "0rem" ,
            opacity:brandModalState===0 ? 0: brandModalState===1 ? 1 : 1 
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
                    display:brandModalState===0 ? "none" : "flex",
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
                    {brandList.map((object,index)=>(
                        <li key={index} className={styles.liStyle} onClick={()=>{
                        router.push(`/brandPage?brandname=${object.brandname}&sort=all&page=1`)
                        setBrandModalState(0)
                        setPcSortState(0) 
                        }}>{object.brandname}</li>
                    ))}
                    </ul>
                </div>
                <div id={styles.pc_brandNameModalMarginBox2}></div>
            </motion.div>
            <div id={styles.pc_brandNameModalMarginBox}></div>
        </motion.div>
    )
}


export default PcBrandModal;