import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import a from '../../../../public/image/search.png'
const header = ()=>{
    return(
        <div id={styles.header} className={`${styles.flexColumn}`}>
            <div id={styles.categoryBox} className={`${styles.flexRow}`}>
                <div id={styles.logoBox}>
                    <Image
                        src={a}
                        alt="로고화면"
                        layout='fill'
                    />
                </div>
                <div id={styles.centerBox}></div>
                <div id={styles.menuBox}>
                </div>
            </div>
            <div id={styles.announcement}>
                <p style={
                    {
                        color:'red',
                    }
                }>오늘의 공지사항!</p>
            </div>
        </div>
    )
}

export default header;