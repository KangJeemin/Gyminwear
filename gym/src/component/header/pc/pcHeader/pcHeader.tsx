import { motion } from 'framer-motion';
import * as React from 'react';
import styles from './pcHeader.module.css'
import { useRef,ChangeEvent } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Logo from '../../../../../public/image/gyminwearLogo.png'
import { useRouter } from 'next/router';
import PcSearchModal from '../pcSearchModal/pcSearchModal';
import { AuthContext } from '@/public/context/authcontext';


const PcHeader = () => {
    const router=useRouter();
    const {searchState, setSearchState}= React.useContext(AuthContext)

    const pushChangeTextColor = (e:ChangeEvent<HTMLInputElement>) => {
        e.target.style.color='blue'
      }
    const clickSearch = () => {
        if(searchState === 0){
            setSearchState(1)
        }
        else if(searchState === 1){
            setSearchState(2)
        }
        else if(searchState === 2){
            setSearchState(1)
        }
        else{
            setSearchState(0)
        }
    }
    return(
    <div id={styles.pc_headerContainerSearchAndMain} onMouseLeave={()=>{
        if(searchState===1){
            setSearchState(2)
        }
        }}>
        <div id={styles.pc_headerContainer} className={`${styles.flexRow}`}>
            <div id={styles.pc_headerLeftBox}></div>
            <div id={styles.pc_headerCenterBox} className={`${styles.flexRow}`}>
                <div id={styles.pc_headerLogoBox} onClick={()=>{
                    router.push('/')
                    setSearchState(0)
                }}>
                    <Image 
                        src={Logo} 
                        alt='이미지 표시 불가'
                        layout='fill'                        
                    />
                </div>
                <div id={styles.pc_headerTopBox} className={`${styles.setTextCenter}`} onClick={()=>{
                    router.push(`/topPage?page=1`)
                    setSearchState(0)
                    
                }}>Top</div>
                <div id={styles.pc_headerBottomBox} className={`${styles.setTextCenter}`} onClick={()=>{
                    router.push(`/bottomPage?page=1`)
                    setSearchState(0)
                }}>Bottom</div>
                <div id={styles.pc_headerxxxBox}></div>
                <div id={styles.pc_headerSearchBox}>
                    <FontAwesomeIcon  icon={faSearch} style={{fontSize:"1.5em",color:"black"}}onClick={()=>{
                        clickSearch()
                    }}/>
                </div>
            </div>
            <div id={styles.pc_headerRightBox}></div>
        </div>
        <PcSearchModal/>
    </div>
    )
}

export default PcHeader