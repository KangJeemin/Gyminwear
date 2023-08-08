import { motion } from 'framer-motion';
import styles from './hambergerModal.module.css'
import { useRouter } from 'next/router';
import { Router } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../../public/context/authcontext';

const AnnouncementModal = () => {
  const {announceState,setAnnounceState} = useContext(AuthContext)
  const router = useRouter();
  return (
    <motion.div
    style={{
        width: '100vw',
        height: '5vh',
        backgroundColor: 'white',
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    //   animate={{
    //     opacity:===0 ? [0,0] : === 1 ? [0,1] : [1,0],
    //     height: ===0 ? ['0vh','0vh'] : === 1 ? ['0vh','95vh'] : ['95vh','0vh']
    //   }}
    //   transition={{
    //     duration: ===0 ? 0 : ===1 ? 0.5 : 0.5, 
    //     times:===0 ? [0,0] : ===1 ? [0,1] : [0,1],
    //     ease: 'easeOut',
    //   }}
    >
      
    </motion.div>
  );
};

export default AnnouncementModal;