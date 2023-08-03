import { motion } from 'framer-motion';
import styles from './hambergerModal.module.css'

const HambergerModal = () => {
  return (
    <motion.div
    style={{
        position: 'fixed',
        top: '5vh', // Initial position above the viewport
        left: 0,
        width: '100vw',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      animate={{
        opacity:[0 , 1],
        height: ['0vh', '95vh']
      }}
      transition={{
        duration: 0.5,
        times:[0, 1],
        ease: 'easeOut',
      }}
    >
      <div id={styles.hambergerContainer}>
        <div id={styles.hambergerBoxLeft}></div>
        <div id={styles.hambergerBoxCenter}>
          <div className={styles.hambergerNavigate}></div>
          <div className={styles.hambergerNavigate}>Top</div>
          <div className={styles.hambergerNavigate}>Bottom</div>
        </div>
        <div id={styles.hambergerBoxRight}></div>
      </div>
    </motion.div>
  );
};

export default HambergerModal;