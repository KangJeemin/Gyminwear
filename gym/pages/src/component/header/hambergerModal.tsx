import { motion } from 'framer-motion';

const HambergerModal = () => {
  return (
    <motion.div
    style={{
        position: 'fixed',
        top: '-50vh', // Initial position above the viewport
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity:0,
      }}
      animate={{
        top: '5vh', // Final position at the top of the viewport
        opacity:[0 ,0.25, 1],
      }}
      transition={{
        duration: 1,
        times:[0, 0.5, 1],
        
        ease: 'easeOut',
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
    </div>
    </motion.div>
  );
};

export default HambergerModal;