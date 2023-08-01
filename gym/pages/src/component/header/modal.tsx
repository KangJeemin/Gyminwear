import { motion } from 'framer-motion';

const Modal = () => {
  return (
    <motion.div
    style={{
        position: 'fixed',
        top: '-100%', // Initial position above the viewport
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      animate={{
        top: 0, // Final position at the top of the viewport
      }}
      transition={{
        duration: 0.25,
        ease: 'linear',
      }}
    >
      {/* 모달 내용 */}
      {/* 모달 내에 표시할 내용이나 컴포넌트를 추가할 수 있습니다 */}
      <p>이것은 모달입니다!</p>
      <div
    style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:"100px",
        height:"100px",
        position: 'relative'
        
    }}>
    <motion.div
        style={{
            width:"30px",
            height:"5px",
            backgroundColor:"blue",
            position: 'absolute'
        }}
        animate={{
            scale:[1,1],
            rotate:[0,45]
        }}
        transition={{
            duration: 2,
            ease: "liner",
            times: [0, 1],
            
          }}
    />
    <motion.div
        style={{
            width:"30px",
            height:"5px",
            backgroundColor:"blue",
            position: 'absolute'
        }}
        animate={{
            scale:[1,1],
            rotate:[0,-45]
        }}
        transition={{
            duration: 2,
            ease: "liner",
            times: [0, 1],

          }}
    />
    </div>
      

    </motion.div>
  );
};

export default Modal;