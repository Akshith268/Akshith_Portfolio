import React from 'react'
import { useState,useEffect } from 'react'
import './about.scss'
import {motion,useAnimation} from 'framer-motion'         



export const About = () => {
    let str="</ABOUT>";
    const [animation,setAnimation]=useState(false);
      const controls=useAnimation();

      useEffect(()=>{
         const handlescroll=()=>{
         if(window.scrollY>100&&!animation){
            setAnimation(true);
            controls.start("animate");
         }
      };
      window.addEventListener("scroll",handlescroll);
      return()=>{
         window.removeEventListener("scroll",handlescroll);
      };
      }
      ,[controls,animation]);


   const textvariants={
       initial:{
          x:-500,
          opacity:0
       },
   
       animate:{
          x:0,
          opacity:1,
          transition:{
          duration:1,
          staggerchildren:0.5
          }
       },
   }

   const headingvariant={
      initial:{
         x:-500,
         opacity:0
      },
  
      animate:{
         x:0,
         opacity:1,
         transition:{
         duration:0.7,
         staggerchildren:0.5
         }
      },
  }




  return (
    <motion.div className='about'>
       <motion.div className='heading' variants={headingvariant} initial='initial' animate={controls} >{str}</motion.div>
       <br/>
       <motion.div className='content' variants={textvariants} initial='initial' animate={controls}>
     Hello, and welcome to my portfolio! 
     I'm a college student on a journey of 
     self-discovery and growth. I'm currently pursuing a degree in Computer Science and Engineering
    at <span>CMR College Of Engineering</span>, where I'm enthusiastically immersing myself in the world of programming.
    <br/><br/>
    In addition to my academic pursuits, I'm an active member of National Service Scheme, where 
    I've had the opportunity to collaborate with amazing peers and gain valuable knowledge of how services are done and also 
    about the non-profit organizations. Being
     a part of this NSS club has not only allowed me to give back to the community but also opened 
     doors to some unforgettable experiences.
       </motion.div>
    </motion.div>
 )
}
