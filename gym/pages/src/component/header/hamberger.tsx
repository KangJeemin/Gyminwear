import React from 'react'
import { motion } from 'framer-motion';


const Hamberger = () => {
   return (
    <div
    style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:"100px",
        height:"100px",
        
    }}>
    <motion.div
        style={{
            width:"30px",
            height:"5px",
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
            repeat: 1,
            
          }}
    />
    <motion.div
        style={{
            width:"30px",
            height:"5px",
            backgroundColor:"blue"
        }}
        animate={{
            scale:[1,1],
            rotate:[0,-45]
        }}
        transition={{
            duration: 1,
            ease: "liner",
            times: [0, 0.5],
            repeat: 1,

          }}
    />
    </div>
   )
}

export default Hamberger