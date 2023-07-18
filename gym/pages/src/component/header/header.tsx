import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
const header = ()=>{
    return(
        <div id='header' className={`${styles.header} ${styles.flexColumn}`}>
            <div id='categorybox'className={`${styles.category} ${styles.flexRow}`}>
                <div id="logoBox" className={styles.logoBox}></div>
                <div id="centerBox" className={styles.centerBox}></div>
                <div id="menuBox" className={styles.menuBox}>
                    <Image
                        src="./search.png"
                        alt='등록되지 않은 이미지'
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div id ='announcement' className={styles.announcement}>
                <p>오늘의 공지사항!</p>
            </div>
        </div>
    )
}

export default header;