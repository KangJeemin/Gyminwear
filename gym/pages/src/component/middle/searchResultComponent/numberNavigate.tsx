import React,{useState} from "react";
import styles from './searchResultComponent.module.css';

interface NumberNavigateProps {
    number: number; // 숫자 타입으로 정의
}


function NumberNavigate(props:NumberNavigateProps) {
    const [pageState,setPageState]=useState<number>(1)
    if(props.number<20){
        return(
            null     
        )
    }
    else if(20<props.number &&props.number <40){
        return(
            pageState==0? (
            <div id ={styles.searchResultComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}>&#60;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}>
                    <span className={styles.color_blue}>1</span>
                    <span className={styles.color_black}>/2</span>
                </span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`} onClick={()=>{
                    setPageState(2)
                }}>&#62;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
            </div>) :
             pageState==1? (
             <div id ={styles.searchResultComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`} onClick={()=>{
                    setPageState(1)
                }}>&#60;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}>
                    <span className={styles.color_blue}>2</span>
                    <span className={styles.color_black}>/2</span>
                </span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`} onClick={()=>{}}>&#62;</span>
                <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
            </div>) : null
        )
    }
    else if(40<props.number && props.number <60){
        return(
             <div id ={styles.searchResultComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
               <span className={`${styles.width_15per} ${styles.text_set_center}`}>&#60;</span>
               <span className={`${styles.width_15per} ${styles.text_set_center}`}>1</span>
               <span className={`${styles.width_15per} ${styles.text_set_center}`}>/3</span>
               <span className={`${styles.width_15per} ${styles.text_set_center}`} onClick={()=>{}}>&#62;</span>
            </div>  
        )
    }
    else{
        return(
            null
        )
    }
}

export default NumberNavigate;