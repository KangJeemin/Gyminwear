import React from 'react'
import Link from 'next/link'
import Header from './src/component/header/header'
import BestAll from './src/component/middle/bestAll/bestAll'
import Footer from './src/component/footer/footer'
import BestTop from './src/component/middle/bestTop/bestTop'
import BestBottom from './src/component/middle/bestBottom/bestBottom'
import HeaderMargin from './src/component/header/headerMargin'
import { useRef } from 'react'

const Main = ()=>{

    const target = useRef<HTMLDivElement | null>(null);
    React.useEffect(()=>{
        const root = document.createElement('div');
        root.style.width = '100vw';
        root.style.height = '5vh';
        // const headerElement = document.getElementById(styles.header);
        //     if (headerElement) {
        //         headerElement.appendChild(root);
        //     }
        const observerOptions = {
            root: root,
            rootMargin: '0px',
            threshold: 1 // Adjust this threshold as needed
          };
        const intersectionCallback = ()=>{
            console.log("a")
        }
      
          const observer = new IntersectionObserver(intersectionCallback, observerOptions);
          if(target.current){
            observer.observe(target.current);
          }
          
    })
    return(
        <div>
            <Header/>
            <HeaderMargin/>
            <BestAll ref={target} />
            <BestTop/>
            <BestBottom/>
        </div>
    )
}

export default Main;