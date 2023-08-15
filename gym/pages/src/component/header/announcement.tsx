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
  const [announcementOpacity, setAnnouncementOpacity] = useState(true);
  const {announceState,setAnnounceState} = useContext(AuthContext)
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const router = useRouter();
  let lastScrollTop = 0;


  useEffect(()=>{
    console.log(scrollY)
    const handleScroll = () => {
        // const scrollPosition = scrollY; // Get the current scroll position
        // const maxScroll = 20; // You can adjust this value
  
        // // Calculate the opacity based on scroll position
        // const opacity = scrollPosition===0? 1 : 1 - Math.min(scrollPosition / maxScroll, 1);
        // setAnnouncementOpacity(opacity);
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // 아래로 스크롤할 때
    setAnnounceState(false)
  } else {
    // 위로 스크롤할 때
    setAnnounceState(true)
  }

  // 현재 스크롤 위치를 이전 스크롤 위치로 업데이트
  lastScrollTop = scrollTop;

      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      
})
  return (
    <motion.div
    initial={{ height: announceState ? '5vh' : '0vh' }}
    animate={{ height: announceState ? '5vh' : '0vh' }}
    transition={{ duration: 0.5 }}
    style={{
        width: '100vw',
        backgroundColor: 'gray',
        display: announcementVisible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'height 0.5s',
        fontSize:'0.5em'
        
      }}
      onAnimationComplete={() => {
        if (!announceState) {
          setAnnouncementVisible(false);
        }
        else{
          setAnnouncementVisible(true);
        }
      }}
    >
      <h1>공지사항</h1>
    </motion.div>
  );
};


export default Announcement;