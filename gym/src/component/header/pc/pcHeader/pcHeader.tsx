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
import PcBrandModal from '../pcBrandModal/pcBrandModal';
import { AuthContext } from '@/public/context/authcontext';


const PcHeader = () => {
    const router=useRouter();
    const {searchState, setSearchState,brandModalState,setBrandModalState}= React.useContext(AuthContext)

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
    const clickBrandModal = () => {
        if(brandModalState === 0){
            setBrandModalState(1)
        }
        else if(brandModalState === 1){
            setBrandModalState(2)
        }
        else if(brandModalState === 2){
            setBrandModalState(1)
        }
        else{
            setBrandModalState(0)
        }
    }
    return(
    <div id={styles.pc_headerContainerSearchAndMain} onMouseLeave={()=>{
        if(searchState===1){
            setSearchState(2)
        }
        if(brandModalState===1){
            setBrandModalState(2)
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
                    router.push(`/topPage?sort=all&page=1`)
                    setSearchState(0)
                    setBrandModalState(0)
                }}>Top</div>
                <div id={styles.pc_headerBottomBox} className={`${styles.setTextCenter}`} onClick={()=>{
                    router.push(`/bottomPage?page=1`)
                    setSearchState(0)
                    setBrandModalState(0)
                }}>Bottom</div>
                <div id={styles.pc_headerBrandBox} className={`${styles.setTextCenter}`} onClick={()=>{
                    setSearchState(2)
                    clickBrandModal()
                }}
                style={{
                    color: brandModalState=== 1 ? "blue" : "black"
                }}>Brand</div>
                <div id={styles.pc_headerxxxBox}></div>
                <div id={styles.pc_headerSearchBox}>
                    <FontAwesomeIcon  icon={faSearch} style={{color:"black"}}onClick={()=>{
                        clickSearch()
                        setBrandModalState(2)
                    }}/>
                </div>
                
            </div>
            <div id={styles.pc_headerRightBox}></div>
        </div>
        <PcSearchModal/>
        <PcBrandModal/>
    </div>
    )
}

export default PcHeader