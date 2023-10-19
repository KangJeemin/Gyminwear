import * as React from 'react'
import styles from './index.module.css'
import { animate, motion } from 'framer-motion';
import { TurnLeft } from '@mui/icons-material';
import { AuthContext } from '@/public/context/authcontext';


const PcBrandModal= () => {
    const {brandModalState} = React.useContext(AuthContext)
    
    return(
        <motion.div id={styles.pc_brandNameModalContainer} 
        animate={{
            height:brandModalState===true ? "20rem" : "0rem",
        }}
        transition={{
            duration:1,
            
        }}
        >

        </motion.div>
    )
}


export default PcBrandModal;