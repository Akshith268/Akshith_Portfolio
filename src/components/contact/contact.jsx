import React, { useRef } from 'react'
import './contact.scss'

import { motion,useAnimation } from 'framer-motion'
import { useState,useEffect } from 'react'
import emailjs from '@emailjs/browser';



export const Contact=()=>{

    const [animation,setAnimation]=useState(false);
      const controls=useAnimation();

      useEffect(()=>{
         const handlescroll=()=>{
         if(window.scrollY>1500&&!animation){
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
           y:-200,
           opacity:0
        },
    
        animate:{
           y:0,
           opacity:1,
           transition:{
           duration:1,
           staggerchildren:0.5
           }
        },
    }

    const headingvariant={
      initial:{
         y:-100,
         opacity:0
      },
  
      animate:{
         y:0,
         opacity:1,
         transition:{
         duration:0.7,
         staggerchildren:0.5
         }
      },
  }

    

  const ref=useRef();
  const formref=useRef();
  const [error,seterror]=useState(false);
  const [success,setsuccess]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_zamwj2j', 'template_cunh3wc', formref.current, 'ONYLs9wACf6-nlIQL')
      .then((result) => {
        console.log(result);
          setsuccess(true);
          seterror(false);
      }, (error) => {
        console.log(error);
          seterror(true);
          setsuccess(false);
      });
  };

  return (
    <div className='contact'>
        <motion.div variants={headingvariant} initial='initial' animate={controls}>
            <h1>
                
                 CONTACT ME
                </h1>
                 </motion.div>
        <br />
        <motion.h2 variants={headingvariant} initial='intial' animate={controls}>Send me a message</motion.h2> <br /><br /><br />
        <motion.div className='emailsender' initial='intital' animate='animate'>
         
            <motion.form  ref={formref} onSubmit={sendEmail} variants={textvariants} initial='initial' animate='animate'>
        <input className='inputtaking' type="text" placeholder='Name' name='name'  />
        <br />
        <br />
        <input className='inputtaking' type="email" name="email" placeholder='Email Id' />
        <br />
        <br />
        <textarea name="message" id="" cols="30" rows="10" className='message' placeholder='write your message'/>
        <br /><br />
         <button type='submit' value='Send'>Send Message</button><br />
         <p className='messagestatus'>
         {error && "error"}
         {success && "message sent !!"}
         </p>
         
            </motion.form>
            <br />
            <div className='socialmedia'>
            <a href="https://www.linkedin.com/in/akshith-reddy-2bbb23220/"><img src="/LinkedIn.png" alt="" /></a>
            <a href="https://www.instagram.com/akshith2208?igsh=bWF1a2w0bjZtaHd2"><img src="/instagram.png" alt="" /></a>
            <a href="https://www.facebook.com/profile.php?id=100006999019441&mibextid=ZbWKwL"><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="/youtube.png" alt="" /></a>


        </div>
        </motion.div>
    </div>
  )
}
