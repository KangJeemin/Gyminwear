import { motion } from 'framer-motion';

const Modal = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
            backgroundColor:"blue",
            position: 'absolute'
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
      

    </div>
  );
};

export default Modal;