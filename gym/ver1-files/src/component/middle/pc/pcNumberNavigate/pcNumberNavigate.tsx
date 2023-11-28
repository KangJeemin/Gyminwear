import { useRouter } from "next/router";
import React,{useContext, useState} from "react";
import styles from "./pcNumberNavigate.module.css"
import { AuthContext } from "@/ver1-files/context/authcontext";
interface NumberNavigateProps {
    number: number;
}


function NumberNavigate(props:NumberNavigateProps) {
    const [pageState,setPageState]=useState<number>(1)
    const router = useRouter()
    const {searchWord} = useContext(AuthContext)

    if(props.number<20){
        return(
            null     
        )
    }
    else if(20<props.number &&props.number <40){
        return(
            pageState==1? (
             <div id={styles.pc_searchResultNumverNavigateBox} className={`${styles.flex_row}`}>
                    <div id={styles.pc_searchResultNumberLeftBox}></div>
                    <div id={styles.pc_searchResultNumberCenterBox} className={`${styles.text_set_center}`}>
                        <div id={styles.pc_searchResultNumberMargin}></div>
                        <div>&#60;</div>
                        <div style={{border:'1px solid',paddingLeft:'0.5rem',paddingRight:'0.5rem'}}>1</div>
                        <div>2</div>
                        <div onClick={()=>{
                            setPageState(2)
                            router.push(`/searchresult?search=${searchWord}&page=2`)
                        }}>&#62;</div>
                        <div id={styles.pc_searchResultNumberMargin}></div>
                    </div>
                    <div id={styles.pc_searchResultNumberRightBox}></div>
                </div>
            ) :
             pageState==2? (
                <div id={styles.pc_searchResultNumverNavigateBox} className={`${styles.flex_row}`}>
                <div id={styles.pc_searchResultNumberLeftBox}></div>
                <div id={styles.pc_searchResultNumberCenterBox} className={`${styles.text_set_center}`}>
                    <div id={styles.pc_searchResultNumberMargin}></div>
                    <div onClick={()=>{
                        setPageState(1)
                        router.push(`/searchresult?search=${searchWord}&page=1`)
                    }}>&#60;</div>
                    <div>1</div>
                    <div style={{border:'1px solid',paddingLeft:'0.5rem',paddingRight:'0.5rem'}}>2</div>
                    <div>&#62;</div>
                    <div id={styles.pc_searchResultNumberMargin}></div>
                </div>
                <div id={styles.pc_searchResultNumberRightBox}></div>
            </div>
            ) : null
        )
    }
    else if(40<props.number && props.number <60){
        return(
            <div id={styles.pc_searchResultNumverNavigateBox} className={`${styles.flex_row}`}>
            <div id={styles.pc_searchResultNumberLeftBox}></div>
            <div id={styles.pc_searchResultNumberCenterBox} className={`${styles.text_set_center}`}>
                <div id={styles.pc_searchResultNumberMargin}></div>
                <span>&#60;</span>
                <span style={{border:'1px solid',padding:'10px'}}>1</span>
                <span>2</span>
                <div id={styles.pc_searchResultNumberMargin}></div>
                <span>3</span>
                <span>&#62;</span>
                <div id={styles.pc_searchResultNumberMargin}></div>
            </div>
            <div id={styles.pc_searchResultNumberRightBox}></div>
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