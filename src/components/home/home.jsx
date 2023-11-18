import React from 'react'
import './home.scss'
import { motion } from 'framer-motion'
import { useState,useEffect } from 'react'
import { Sidebar } from '../sidebar/sidebar'

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

const slidevariants={
  initial:{
   x:0
  },

  animate:{
    x:"-220%",
    transition:{
      duration:20,
      repeat:Infinity,
      repeatType:"mirror"
    }
  }
}



// const [homepageOpacity, setHomepageOpacity] = useState(1); 

// const handleSidebarState = (sidebarState) => {
//   setHomepageOpacity(sidebarState ? 0.5 : 1);
// };

export const Home = () => {

  return (
    <div className='home'>
      <div className='wrapper'>
        <motion.div className='text' initial="initial" animate="animate">
            <motion.div className='firstheading' variants={textvariants}>AKSHITH REDDY</motion.div>
            <motion.div  className='secondheading' variants={textvariants}>Web Developer</motion.div>
            <motion.div variants={textvariants} className='buttons'>
                 <motion.button variants={textvariants} whileHover={{scale:1.1,cursor:'pointer',background:'white',color:'black'}} className='fbutton'>See my work</motion.button>
                 <motion.button variants={textvariants} whileHover={{scale:1.1,cursor:'pointer',background:'white',color:'black'}} className='sbutton'>Contact me</motion.button>
            </motion.div>
        </motion.div>
      </div>
      <motion.div className='slidingtext' variants={slidevariants} initial="initial" animate="animate">
        FullStack Developer
      </motion.div>
        <div className='image'>
             <img src="/myimage.jpg" alt="" height={500} width={500} />
        </div>
    </div>
  )
}
