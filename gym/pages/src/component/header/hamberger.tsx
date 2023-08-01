import React from 'react'
import { motion } from 'framer-motion';


const Hamberger = () => {
    const blockVariants = {
        initial: {
          y: -50,
        },
        target: {
          y: 100,
        },
      };
    
      return (
        <motion.div
          style={{
            background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
          variants={blockVariants}
          initial="initial"
          animate="target"
          transition={{
            ease: "easeInOut",
            duration: 0.7, // 애니메이션이 총 걸리는 시간
            delay: 2, // 처음 애니메이션 delay
            repeat: 3, // 3번 반복
            // repeat: Infinity,
            repeatType: "loop", //   "loop" | "reverse" | "mirror";
            repeatDelay: 1, // 반복 될 때 delay
          }}
        />
      );
}

export default Hamberger