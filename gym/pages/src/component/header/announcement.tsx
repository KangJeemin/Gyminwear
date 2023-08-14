import { motion } from 'framer-motion';
import styles from './hambergerModal.module.css'
import { useRouter } from 'next/router';
import { Router } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../../public/context/authcontext';
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';


const Announcement = () => {
  const scrollX = useScrollXPosition();
  const scrollY = useScrollYPosition();
  const [announcementOpacity, setAnnouncementOpacity] = useState(1);
  const {announceState,setAnnounceState} = useContext(AuthContext)
  const router = useRouter();

  useEffect(()=>{
    console.log(scrollY)
    const handleScroll = () => {
        const scrollPosition = scrollY; // Get the current scroll position
        const maxScroll = 20; // You can adjust this value
  
        // Calculate the opacity based on scroll position
        const opacity = scrollPosition===0? 1 : 1 - Math.min(scrollPosition / maxScroll, 1);
        setAnnouncementOpacity(opacity);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      
})
  return (
    <motion.div
    style={{
        width: '100vw',
        height: `5vh`, // Apply the calculated header height
        backgroundColor: 'gray',
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: announcementOpacity, // Apply the calculated opacity
        transition: 'opacity 0.5s'
               
      }}
    >
      <h1>공지사항</h1>
    </motion.div>
  );
};


export default Announcement;