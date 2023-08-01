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
    </div>
  );
};

export default Modal;