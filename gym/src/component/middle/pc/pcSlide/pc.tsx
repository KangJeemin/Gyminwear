import * as React from 'react';
import styles from './index.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';


const PcSlide = () => {
    const [slideState,setSlideState] = React.useState<number>(0)
    const [slideAnimate,setSlideAnimate] = React.useState<number>(0)
    
    const clickNext = () => {
        if(slideState===0){
            setSlideAnimate(-85);
            setSlideState(slideState+1)
        }
        else if(slideState===1){
            setSlideAnimate(-175)
            setSlideState(slideState+1)
        }
        else if(slideState===2){
            setSlideAnimate(-265)
            setSlideState(slideState+1)
        }
        else if(slideState===3){
            setSlideAnimate(-355)
            setSlideState(slideState+1)
        }
    }
    const clickPrevius = () => {
        if(slideState===4){
            setSlideAnimate(-265);
            setSlideState(slideState-1)
        }
        else if(slideState===3){
            setSlideAnimate(-175)
            setSlideState(slideState-1)
        }
        else if(slideState===2){
            setSlideAnimate(-85)
            setSlideState(slideState-1)
        }
        else if(slideState===1){
            setSlideAnimate(5)
            setSlideState(slideState-1)
        }
    }
        
    React.useEffect(()=>{
        setTimeout(() => {
            clickNext()
        }, 3000);
    })
    React.useEffect(()=>{
        setSlideAnimate(5)
    },[])
    
    return(
            <div id={styles.pc_slideContainerImageBox} className={`${styles.flexRow}`}>
                <div id={styles.pc_slideContainerImageBoxLeftButton} className={`${styles.setTextCenter}`} onClick={()=>{
                    clickPrevius()
                    
                }}>&#60;</div>
                <motion.div id={styles.pc_slideContainerImageBoxImage}
                    animate={{
                        left: `${slideAnimate}%`
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "linear",
                }}>
                    <div id={styles.pc_slide1}>
                        <div style={{width:"100%",height:"20%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> 유행하는 짐웨어,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> 오버핏 짐웨어,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> 짐인웨어에서 확인해 보세요.</div>
                        <div style={{width:"100%",height:"20%"}}></div>
                    </div>
                    <div id={styles.pc_slide2}>
                        <div style={{width:"100%",height:"20%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> abc,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> def,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> ghi.</div>
                        <div style={{width:"100%",height:"20%"}}></div>
                    </div>
                    <div id={styles.pc_slide3}>
                        <div style={{width:"100%",height:"20%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> abc,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> def,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> ghi.</div>
                        <div style={{width:"100%",height:"20%"}}></div>
                    </div>
                    <div id={styles.pc_slide4}>
                        <div style={{width:"100%",height:"20%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> abc,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> def,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> ghi.</div>
                        <div style={{width:"100%",height:"20%"}}></div>
                    </div>
                    <div id={styles.pc_slide5}>
                        <div style={{width:"100%",height:"20%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> abc,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> def,</div>
                        <div style={{width:"100%"}}></div>
                        <div id={styles.pc_slideText}  className={`${styles.setTextCenter}`}> ghi.</div>
                        <div style={{width:"100%",height:"20%"}}></div>
                    </div>
                </motion.div>
                <div id={styles.pc_slideNavigation}> 
                    <motion.div className={`${styles.slideNavigateLayout}`} 
                    animate={{
                        width: slideState ===-1 ? ['2rem', '2rem'] :slideState ===0 ?  ['1rem', '2rem'] :['2rem', '1rem'],

                    }}
                    transition={{
                        duration: 0.5,
                        ease: "linear",
                      }}>
                    </motion.div>
                    <motion.div className={`${styles.slideNavigateLayout}`} 
                    animate={{
                        width: slideState ===1 ? ['1rem', '2rem'] : ['2rem', '1rem'],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "linear",
                      }}>
                    </motion.div>
                    <motion.div className={`${styles.slideNavigateLayout}`} 
                    animate={{
                        width: slideState ===2 ? ['1rem', '2rem'] : ['2rem', '1rem'],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "linear",
                      }}>
                    </motion.div>
                    <motion.div className={`${styles.slideNavigateLayout}`} 
                    animate={{
                        width: slideState ===3 ? ['1rem', '2rem'] : ['2rem', '1rem'],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "linear",
                      }}>
                    </motion.div>
                    <motion.div className={`${styles.slideNavigateLayout}`} 
                    animate={{
                        width: slideState ===4 ? ['1rem', '2rem'] : ['2rem', '1rem'],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "linear",
                      }}>
                    </motion.div>

                </div>
                
                <div id={styles.pc_slideContainerImageBoxRightButton} className={`${styles.setTextCenter}`} onClick={()=>{
                    clickNext()
                }}>&#62;</div>
                
            </div>
    )
}

export default PcSlide