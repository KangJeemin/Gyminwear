import { motion } from 'framer-motion';
import styles from './hambergerModal.module.css'
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../../context/authcontext';
import BrandList from '../brandList/brandList';


const HambergerModal = () => {
  const {hambergerState,setState,setHambergerState,setSearchState} = useContext(AuthContext)
  const [brandListState, setBrandListState] = useState<boolean>(false)
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
            router.push(`/topPage?sort=all&page=1`)
            setHambergerState(0)
            setSearchState(0)
            setState(0)
          }}>Top</div>
          <div className={styles.hambergerNavigate} onClick={()=>{
            router.push(`/bottomPage?sort=all&page=1`)
            setHambergerState(0)
            setSearchState(0)
            setState(0)
          }}>Bottom</div>
          <div className={styles.hambergerNavigate} onClick={()=>{brandListState? setBrandListState(false):setBrandListState(true)}}>{brandListState ? <>Brand - </> :<>Brand +</> }
            <BrandList brandListState={brandListState}/>
          </div>
        </div>
        <div id={styles.hambergerBoxRight}></div>
      </div>
    </motion.div>
  );
};

export default HambergerModal;