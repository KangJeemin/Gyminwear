// components/Modal.tsx
import React from 'react';

const Modal: React.FC<{ isOpen: boolean, onClose: () => void, children:React.ReactNode }> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const styles:Record<string, React.CSSProperties> = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)', /* 투명도 조절 */
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '18px',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
