
import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import styles from './topComponent.module.css';
interface NumberNavigateProps {
    number: number; // 숫자 타입으로 정의
}


function NumberNavigate(props:NumberNavigateProps) {
    if(props.number>20){
        return(
            <div id ={styles.searchResultComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
               <span className={`${styles.width_15per} ${styles.text_set_center}`}>&#60;</span>
               <span className={`${styles.width_15per} ${styles.text_set_center}`}>1</span>
               <span className={`${styles.width_15per} ${styles.text_set_center}`} onClick={()=>{}}>&#62;</span>
            </div>
        )
    }
}

export default NumberNavigate;