import { motion } from 'framer-motion';

const SearchModal = () => {
  return (
    <motion.div
    style={{
        position: 'fixed',
        top: '5vh',
        left: 0,
        width: '100vw',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity:0,
      }}
      animate={{
        height:['0vh', '95vh'],
        opacity:[0 ,1],
      }}
      transition={{
        duration: 0.5,
        times:[0, 1],
        
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

export default SearchModal;