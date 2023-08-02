import { style } from '@mui/system';
import { motion } from 'framer-motion';
import styles from './searchModal.module.css'
const SearchModal = () => {
  return (
    <motion.div
    style={{
        position: 'fixed',
        top: '5vh',
        left: 0,
        width: '100vw',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity:0,
      }}
      animate={{
        height:['0vh', '95vh'],
        opacity:[0 ,1],
      }}
      transition={{
        duration: 0.5,
        times:[0, 1],
        ease: 'easeOut',
      }}
    >
    <div id={styles.searchContainer}>
        <div id={styles.searchBoxLeft}></div>
        <div id={styles.searchBox}>
            <div id= {styles.searchBoxIcon}></div>
            <input id={styles.searchBoxInput}type="text" />
            <div id= {styles.searchBoxDelete}></div>
        </div>
        <div id={styles.searchBoxRight}></div>
    </div>
        
     
    </motion.div>
  );
};

export default SearchModal;