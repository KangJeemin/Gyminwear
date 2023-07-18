import React from 'react'
import styles from './header.module.css'
const header = ()=>{
    return(
        <div id='header'className={`${styles.category} ${styles.flexRow}`}>
            <div id="logoBox" className={styles.logoBox}></div>
            <div id="centerBox" className={styles.centerBox}></div>
            <div id="menuBox" className={styles.menuBox}></div>
        </div>
    )
}

export default header;