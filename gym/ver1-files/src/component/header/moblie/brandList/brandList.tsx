import React from 'react'
import styles from './index.module.css';
import { useRouter} from 'next/router';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '@/ver1-files/context/authcontext';
import { breadcrumbsClasses } from '@mui/material';

type brandListState = {
    brandListState:boolean
}

const BrandList = (props:brandListState) => {
    const router = useRouter();
    const {hambergerState,setState,setHambergerState,setSearchState} = useContext(AuthContext)
    const brandList = [
       {id:1,brandname:"피지컬크라운"},
       {id:2,brandname:"짐브로"}, 
    ]
    return(
        <motion.div id={styles.brandListContainer} style={{
            
        }}
        animate={{
            height:props.brandListState ? "500px" : "0px"
        }}
        transition={{
            times:1,
            ease: "easeInOut",
        }}
        >
            <ul>
               {brandList.map((object,index)=>(
                <li key={index} id={styles.brandListBrandName} onClick={()=>{
                    router.push(`/brandPage?brandname=${object.brandname}&sort=all&page=1`)
                    setHambergerState(0)
                    setSearchState(0)
                    setState(0)
                    }}>{object.brandname}</li>
               ))}
            </ul>
            
            
        </motion.div>
    )
}

export default BrandList;