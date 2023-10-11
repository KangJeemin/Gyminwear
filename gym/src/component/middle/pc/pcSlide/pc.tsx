import * as React from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
import gbroSlider from '../../../../../public/image/slider/gbro_slider1.jpg'
import gbroSlider2 from'../../../../../public/image/slider/gbro_slider2.png'
import pysicalcrown from '../../../../../public/image/slider/pysicalcrown_slider1.png'


const PcSlide = () => {
    const router = useRouter();
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
    const clickNext = (slideNum:number,slideWid:number) => {
        setSlideAnimate(slide=>slide-slideWid)  // 슬라이드 위치 이동
        if(slideState===slideNum){  // 슬라이드 아이콘 네비게이션 
            setSlideState(0) 
        }
        else{
            setSlideState(state=>state+1)
        }
        setImageBoxWidth(width=>width+slideWid) //슬라이드 크기 증가 
        
        // 기존 5개의 배열에서, 순차적으로 순환하며 생성하며 배열을 늘려나감
        const updatedOrder:string[] = [...childrenOrder];
        const pulsChild =updatedOrder[count]
        if(pulsChild !== undefined){
            updatedOrder.push(pulsChild);
            setChildrenOrder(updatedOrder);
            setCount(count=>count+1)
            if(count>=slideNum){
                setCount(0)
            }
        }
        else{
            console.log("슬라이드 과정에서 Type 에러가 발생 ")
        }
        // 자동 슬라이더 시간 초기화
        setAutoSlide(0)
    }
    const clickPrevius = (slideNum:number,slideWid:number) => {
        // 자동 슬라이더 시간 초기화
        setAutoSlide(0)
        
        // 페이지 첫 로딩시(슬라이더가 추가적으로 만들어지지 않았을 경우)에 왼쪽 버튼 눌러도 작동 안 하게 하는 기능 
        if(slideAnimate<5){
            // 슬라이드 위치 이동
            setSlideAnimate(slide=>slide+slideWid)
        
        // 슬라이드 아이콘 네비게이션 
        if(slideState===0){  
            setSlideState(slideNum) 
        }
        else{
            setSlideState(state=>state-1)
        }
        }
        
        
        
        
    }
    React.useEffect(()=>{
        // autoSlide가 4가 될 경우, 즉 4초가 지나면 슬라이더 넘김
        // if(autoSlide===6){
        //     clickNext(4,100)
        // }    
        
    },[autoSlide])
    React.useEffect(()=>{
        //1초마다 autoSlide 값을 1씩 증가시킴으로써 슬라이더가 자동으로 넘어가도록 하는 기능 
        const intervalId = setInterval(() => {
            setAutoSlide((prevAutoSlide) => prevAutoSlide + 1);
          }, 1000);
        
        return () =>  {
            clearInterval(intervalId)
        }
    },[])
    
    return(
            <div id={styles.pc_slideContainerImageBox} className={`${styles.flexRow}`}>
                <div id={styles.pc_slideContainerImageBoxLeftButton} className={`${styles.setTextCenter}`} onClick={()=>{
                    clickPrevius(4,100)
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
                        {index%5 ===0 ? (
                            <>
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
                           </>
                        ) :
                        index%5 === 2 ? (
                            <Image
                            src={gbroSlider}
                            alt='이미지 표시 불가'
                            layout='fill'
                            onClick={()=>{
                                router.push(`https://gymbro.kr/product/list_thumb.html?cate_no=105`)
                            }}

                        />
                        ) :
                        index%5 ===3 ? (
                            <Image
                            src={gbroSlider2}
                            alt='이미지 표시 불가'
                            layout='fill'
                            onClick={()=>{
                                router.push(`https://gymbro.kr/product/list_thumb.html?cate_no=115`)
                            }}

                        />
                        ) : 
                        index%5 === 4 ? (
                            <>
                            <div style={{ width: "100%", height: "20%" ,backgroundImage: `url:${pysicalcrown}`}}></div>
                            <div id={styles.pc_slideText} className={`${styles.setTextCenter}`}>
                              건강한 피트니스의
                            </div>
                            <div style={{ width: "100%" }}></div>
                            <div id={styles.pc_slideText} className={`${styles.setTextCenter}`}>
                              라이프 스타일을 축구하는 짐웨어 브랜드
                            </div>
                            <div style={{ width: "100%" }}></div>
                            <div id={styles.pc_slideText} className={`${styles.setTextCenter}`}>
                              피지컬크라운 입니다.
                            </div>
                            <div style={{ width: "100%", height: "20%" }}></div>
                           </>
                        ) : (null)
                        }
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
                    clickNext(4,90)
                    setAutoSlide(0)
                    // createSlideChild(4)
                }}>&#62;</div>
                
            </div>
    )
}

export default PcSlide