import { motion } from 'framer-motion';
import * as React from 'react';
import styles from './pcHeader.module.css'
import { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Logo from '../../../../../public/image/gyminwearLogo.png'
import { useRouter } from 'next/router';
import PcSearchModal from './pcSearchModal';


const PcHeader = () => {
    const router=useRouter();
    const [pcSearchModalState,setPcSearchModalState]=React.useState<number>(0)
    const clickSearch = () => {
        if(pcSearchModalState === 0){
            setPcSearchModalState(1)
        }
        else if(pcSearchModalState === 1){
            setPcSearchModalState(2)
        }
        else if(pcSearchModalState === 2){
            setPcSearchModalState(1)
        }
        else{
            setPcSearchModalState(0)
        }
    }
    return(
    <div id={styles.pc_headerContainer} className={`${styles.flexRow}`}>
        <div id={styles.pc_headerLeftBox}></div>
        <div id={styles.pc_headerCenterBox} className={`${styles.flexRow}`}>
            <div id={styles.pc_headerLogoBox} onClick={()=>{
                router.push('/')
            }}>
                <Image 
                    src={Logo} 
                    alt='이미지 표시 불가'
                    layout='fill'                        
                />
            </div>
            <div id={styles.pc_headerTopBox} className={`${styles.setTextCenter}`} onClick={()=>{
                router.push(`/topPage?page=1`)
            }}>Top</div>
            <div id={styles.pc_headerBottomBox} className={`${styles.setTextCenter}`} onClick={()=>{
                router.push(`/bottomPage?page=1`)
            }}>Bottom</div>
            <div id={styles.pc_headerxxxBox}></div>
            <div id={styles.pc_headerSearchBox}>
                <FontAwesomeIcon  icon={faSearch} style={{fontSize:"1.5em",color:"black"}}onClick={()=>{
                    clickSearch()
                }}/>
            </div>
        </div>
        <div id={styles.pc_headerRightBox}></div>
        <PcSearchModal state={pcSearchModalState} setState={setPcSearchModalState}/>
    </div>
    )
}

export default PcHeader