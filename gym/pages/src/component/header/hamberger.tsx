import React from 'react'
import { motion } from 'framer-motion';


const Hamberger = () => {
   return (
    <div
    style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:"100px",
        height:"100px",
        
    }}>
    <motion.div
        style={{
            width:"10px",
            height:"30px",
            backgroundColor:"blue"
        }}
        animate={{
            scale:[1,1],
            rotate:[0,45]
        }}
        transition={{
            duration: 1,
            ease: "liner",
            times: [0, 0.5],
            repeat: Infinity,
            repeatDelay: 1
          }}
    />
    </div>
   )
}

export default Hamberger