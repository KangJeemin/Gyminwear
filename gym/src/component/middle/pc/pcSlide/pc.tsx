import * as React from 'react';
import styles from './index.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';


const PcSlide = () => {
    const [slideState,setSlideState] = React.useState<number>(0)
    const [slideAnimate,setSlideAnimate] = React.useState<number>(5)
    const [autoSlide,setAutoSlide] = React.useState<number>(0)
    const [imageBoxWidth,setImageBoxWidth] = React.useState<number>(450)
    const [childrenOrder, setChildrenOrder] = React.useState([
        styles.pc_slide1,
        styles.pc_slide2,
        styles.pc_slide3,
        styles.pc_slide4,
        styles.pc_slide5
      ]);
    const [count, setCount]=React.useState(0)
    
      const createSlideChild = (num:number) => {
        const updatedOrder:string[] = [...childrenOrder];
        const pulsChild =updatedOrder[count]
        if(pulsChild !== undefined){
            updatedOrder.push(pulsChild);
            setChildrenOrder(updatedOrder);
            setCount(count=>count+1)
            if(count>=num){
                setCount(0)
            }
        }
        else{
            console.log("슬라이드 과정에서 Type 에러가 발생 ")
        }
        
      };
    const clickNext = () => {
        // if(slideState===0){
        //     setSlideAnimate(-85);
        //     setSlideState(slideState+1)
            
        // }
        // else if(slideState===1){
        //     setSlideAnimate(-175)
        //     setSlideState(slideState+1)
        // }
        // else if(slideState===2){
        //     setSlideAnimate(-265)
        //     setSlideState(slideState+1)
        // }
        // else if(slideState===3){
        //     setSlideAnimate(-355)
        //     setSlideState(slideState+1)
        // }
        setSlideAnimate(slide=>slide-90)
        console.log(slideAnimate)
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
        if(autoSlide===4){
            setAutoSlide(0)
            clickNext()
            createSlideChild(4)
        }    
        
    },[autoSlide])
    React.useEffect(()=>{
        setSlideAnimate(5) //처음 로딩 시 애니메이션 컴포넌트의 위치 초기화.
        // const intervalId = setInterval(() => {
        //     setAutoSlide((prevAutoSlide) => prevAutoSlide + 1);
        //   }, 1000);
        
        // return () =>  {
        //     clearInterval(intervalId)
        // }
    },[])
    
    return(
            <div id={styles.pc_slideContainerImageBox} className={`${styles.flexRow}`}>
                <div id={styles.pc_slideContainerImageBoxLeftButton} className={`${styles.setTextCenter}`} onClick={()=>{
                    clickPrevius()
                    setAutoSlide(0)
                }}>&#60;</div>
                <motion.div id={styles.pc_slideContainerImageBoxImage}
                    animate={{
                        left: `${slideAnimate}%`,
                        width: `${imageBoxWidth}%`
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "linear",
                }}>
                    {childrenOrder.map((child, index) => (
                       <div key={index} id={child}>
                         <div style={{ width: "100%", height: "20%" }}></div>
                         <div id={styles.pc_slideText} className={`${styles.setTextCenter}`}>
                           유행하는 짐웨어,
                         </div>
                         <div style={{ width: "100%" }}></div>
                         <div id={styles.pc_slideText} className={`${styles.setTextCenter}`}>
                           오버핏 짐웨어,
                         </div>
                         <div style={{ width: "100%" }}></div>
                         <div id={styles.pc_slideText} className={`${styles.setTextCenter}`}>
                           짐인웨어에서 확인해 보세요.
                         </div>
                         <div style={{ width: "100%", height: "20%" }}></div>
                       </div>
                     ))}
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
                    setAutoSlide(0)
                    // createSlideChild(4)
                }}>&#62;</div>
                
            </div>
    )
}

export default PcSlide