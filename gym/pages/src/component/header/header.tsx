import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import a from '../../../../public/image/search.png'
const header = ()=>{
    return(
        <div id='header' className={`${styles.header} ${styles.flexColumn}`}>
            <div id='categorybox'className={`${styles.category} ${styles.flexRow}`}>
                <div id="logoBox" className={styles.logoBox}>
                    <Image
                        src={a}
                        alt= "이미지를 표시 할 수 없습니다."
                        width={100}
                        height={100}

                    />
                </div>
                <div id="centerBox" className={styles.centerBox}></div>
                <div id="menuBox" className={styles.menuBox}>
                </div>
            </div>
            <div id ='announcement' className={styles.announcement}>
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