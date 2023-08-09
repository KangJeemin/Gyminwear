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
  const [headerHeight, setHeaderHeight] = useState(5);
  const {announceState,setAnnounceState} = useContext(AuthContext)
  const router = useRouter();

  useEffect(()=>{
    console.log(scrollY)
    const handleScroll = () => {
        const scrollPosition = scrollY; // Get the current scroll position
        const maxScroll = 50; // You can adjust this value
  
        // Calculate the opacity based on scroll position
        const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
        setAnnouncementOpacity(opacity);
        const calculatedHeight = Math.max(0, 5 - (scrollPosition / maxScroll) * 5); // Limit between 0 and 5
        setHeaderHeight(calculatedHeight);
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
        height: `${headerHeight}vh`, // Apply the calculated header height
        backgroundColor: 'red',
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: announcementOpacity, // Apply the calculated opacity
        transition: 'opacity 0.5s,height 0.5s',
               
      }}
    >
      <h1>하이</h1>
    </motion.div>
  );
};


export default Announcement;