import { motion } from 'framer-motion';
import styles from './hambergerModal.module.css'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../../../../../public/context/authcontext';

const HambergerModal = () => {
  const {hambergerState,setState,setHambergerState,setSearchState} = useContext(AuthContext)
  const router = useRouter();
  return (
    <motion.div
    style={{
        position: 'fixed',
        top: '5vh', // Initial position above the viewport
        left: 0,
        width: '100vw',
        backgroundColor: 'white',
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:hambergerState === 1 ? 2 : 0,
        
      }}
      animate={{
        opacity:hambergerState===0 ? [0,0] : hambergerState=== 1 ? [0,1] : [1,0],
        height: hambergerState===0 ? ['0vh','0vh'] : hambergerState=== 1 ? ['0vh','95vh'] : ['95vh','0vh'],
      }}
      transition={{
        duration: hambergerState===0 ? 0 : hambergerState===1 ? 0.5 : 0.5, 
        times:hambergerState===0 ? [0,0] : hambergerState===1 ? [0,1] : [0,1],
        ease: 'linear',
      }}
    >
      <div id={styles.hambergerContainer}>
        <div id={styles.hambergerBoxLeft}></div>
        <div id={styles.hambergerBoxCenter}>
          <div className={styles.hambergerNavigate}></div>
          <div className={styles.hambergerNavigate} onClick={()=>{
            router.push(`/topPage?page=1`)
            setHambergerState(0)
            setSearchState(0)
            setState(0)
          }}>Top</div>
          <div className={styles.hambergerNavigate} onClick={()=>{
            router.push("/bottomPage")
            setHambergerState(0)
            setSearchState(0)
            setState(0)
          }}>Bottom</div>
        </div>
        <div id={styles.hambergerBoxRight}></div>
      </div>
    </motion.div>
  );
};

export default HambergerModal;