import styles from './pcCard1.module.css'
import * as React from 'react'
import type { GymItemProps,gymWearItem } from '@/src/type/gymwear';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { display } from '@mui/system';

const PcCard1 = (props:GymItemProps) => { 
    const router = useRouter();
    const [onOffButton,setOnOffButton]=React.useState<boolean>(false)
    const [moveButton,setmoveButton]=React.useState<boolean>(false)
    
    return(
        <div id={styles.pc_card1Component}>
            <div id={styles.pc_card1ComponentText}>이번주 인기 상품</div>
            <motion.div id={styles.pc_card1Container} className={`${styles.flexRowOver}`} onMouseEnter={()=>{setOnOffButton(true)}} onMouseLeave={()=>{setOnOffButton(false)}}
                // animate={{
                //     left:rightButton === true ? "-100%" : "0%"
                // }}
                // transition={{
                //     duration: 1,
                //     ease: "linear",
                    
                //   }}
              >
                <span id={styles.pc_card1ContainerLeftButton} className={`${styles.button} ${styles.text_set_center}` } onClick={()=>{
                    setmoveButton(false)
                }}
                style={{
                    display: (onOffButton ===true) && (moveButton===true) ? "block" : "none"
                }}>	&#60;</span>
                <span id={styles.pc_card1ContainerRightButton} className={`${styles.button} ${styles.text_set_center}`} onClick={()=>{
                    setmoveButton(true)
                }}
                style={{
                    display: (onOffButton ===true) && (moveButton===false) ? "block" : "none"
                }}>	&#62;</span>
                <motion.div id={styles.pc_card1_item_component} 
                    animate={{
                        left:moveButton === true ? "-90%" : "0%"
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",

                      }}>
                {props.gymitem?(props.gymitem.map((object:gymWearItem, index) => (
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
                                <span id={styles.pc_card1_item_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                            </span>
                        </span>
                    ))):null}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default PcCard1;