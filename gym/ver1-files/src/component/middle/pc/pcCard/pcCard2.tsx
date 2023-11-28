import styles from './pcCard1.module.css'
import * as React from 'react'
import type { GymItemProps,gymWearItem } from '@/ver1-files/src/type/gymwear';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { display } from '@mui/system';

type getGymItemFromPcMain = {
    gymitem2:[]
}
const PcCard2 = (props:getGymItemFromPcMain) => { 
    
    const router = useRouter();
    const [onOffButton1,setOnOffButton1]=React.useState<boolean>(false)
    const [moveButton1,setmoveButton1]=React.useState<boolean>(false)
    
    return(
        <div id={styles.pc_card1Component}>
            <div id={styles.pc_card1ComponentText}>최신 짐웨어</div>
            <motion.div id={styles.pc_card1Container}  onMouseEnter={()=>{setOnOffButton1(true)}} onMouseLeave={()=>{setOnOffButton1(false)}}
              >
                <span id={styles.pc_card1ContainerLeftButton} className={`${styles.button} ${styles.text_set_center}` } onClick={()=>{
                    setmoveButton1(false)
                }}
                style={{
                    display: (onOffButton1 ===true) && (moveButton1===true) ? "block" : "none"
                }}><span className={` ${styles.widAndHei100} ${styles.setTextCenter}`}>&#60;</span></span>
                <span id={styles.pc_card1ContainerRightButton} className={`${styles.button} ${styles.text_set_center}`} onClick={()=>{
                    setmoveButton1(true)
                }}
                style={{
                    display: (onOffButton1 ===true) && (moveButton1===false) ? "block" : "none"
                }}><span className={`${styles.setTextCenter} ${styles.widAndHei100}`}>&#62;</span></span>
                <motion.div id={styles.pc_card1_item_component} 
                    animate={{
                        left:moveButton1 === true ? "-90%" : "0%"
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",

                      }}>
                {props.gymitem2?(props.gymitem2.map((object:gymWearItem, index) => (
                        <span key={index}  className={`${styles.card}`}>
                            <span id={styles.pc_card1_item_imageSize}>
                                <Image
                                    src={object.image}
                                    style={{borderRadius:"30px"}}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.pc_card1_item_textBoxSize}>
                                <span id={styles.pc_card1_item_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.pc_card1_item_itemName}
                                     onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}className={styles.text_set_center}><h5>{object.productname}</h5></span>
                            </span>
                        </span>
                    ))):null}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default PcCard2;