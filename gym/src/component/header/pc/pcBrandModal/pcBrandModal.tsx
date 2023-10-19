import * as React from 'react'
import styles from './index.module.css'
import { animate, motion } from 'framer-motion';
import { TurnLeft } from '@mui/icons-material';

type getBrandState = {
    brandState:boolean
}

const PcBrandModal= (props:getBrandState) => {
    
    
    return(
        <motion.div id={styles.pc_brandNameModalContainer} 
        animate={{
            height:props.brandState===true ? "20rem" : "0rem",
        }}
        transition={{
            duration:1,
            delay:2
            
        }}
        >

        </motion.div>
    )
}


export default PcBrandModal;