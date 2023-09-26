import { useRouter } from "next/router";
import React,{useContext, useState} from "react";
import styles from "./pcNumberNavigate.module.css"
import { AuthContext } from "@/public/context/authcontext";
interface NumberNavigateProps {
    number: number;
    pageMove: Function;
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
                        <span>&#60;</span>
                        <span style={{border:'1px solid',padding:'10px'}}>1</span>
                        <span>2</span>
                        <span onClick={()=>{
                            setPageState(2)
                            router.push(`/searchresult?search=${searchWord}&page=2`)
                        }}>&#62;</span>
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
                    <span onClick={()=>{
                        setPageState(1)
                        router.push(`/searchresult?search=${searchWord}&page=1`)
                    }}>&#60;</span>
                    <span style={{border:'1px solid',padding:'10px'}}>1</span>
                    <span>2</span>
                    <span>&#62;</span>
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