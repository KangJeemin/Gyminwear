import { motion } from 'framer-motion';
import styles from './hambergerModal.module.css'
import { useRouter } from 'next/router';
import { Router } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../../public/context/authcontext';
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';


const Announcement = () => {
  const {announceState,setAnnounceState} = useContext(AuthContext)
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const router = useRouter();


  useEffect(()=>{
      
})
  return (
    <motion.div
      style={{
        width: '100vw',
        height: '5vh',
        backgroundColor: '#D9D9D9',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:'0.5em',
        color:'black'
        
      }}
    >
      <h1>공지사항</h1>
    </motion.div>
  );
};


export default Announcement;