import styles from './pcCard1.module.css'
import * as React from 'react'


const PcCard1 = () => { 
    
    
    return(
        <div id={styles.pc_card1Component}>
            <div id={styles.pc_card1ComponentText}>이번주 인기 상품들</div>
            <div id={styles.pc_card1Container} className={`${styles.flexRow}`}>
                <div className={styles.card}>z</div>
                <div className={styles.card}>z</div>
                <div className={styles.card}>z</div>
                <div className={styles.card}>z</div>
            </div>
        </div>
    )
}

export default PcCard1;