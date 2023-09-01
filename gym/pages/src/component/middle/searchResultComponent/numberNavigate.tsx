
import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import styles from './topComponent.module.css';


function NumberNavigate(props:number) {
    if(props>20){
        return(
            <div id ={styles.searchResultComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`} ref={target}>
               <span className={`${styles.width_15per} ${styles.text_set_center}`}>&#60;</span>
               <span className={`${styles.width_15per} ${styles.text_set_center}`}>1</span>
               <span className={`${styles.width_15per} ${styles.text_set_center}`} onClick={()=>{}}>&#62;</span>
            </div>
        )
    }
}

export default NumberNavigate;