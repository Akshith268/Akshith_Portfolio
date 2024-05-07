import React from 'react'
import './Navbar.scss'
import {motion} from 'framer-motion'
import { Sidebar } from '../sidebar/sidebar'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div>
          <Sidebar/>
        </div>
        {/* <motion.span whileHover={{scale:1.2}} transition={{duration:0.3}}>Akshith Reddy</motion.span> */}
        {/* <div className='socialmedia'>
            <a href="/"><img src="/LinkedIn.png" alt="" /></a>
            <a href=""><img src="/instagram.png" alt="" /></a>
            <a href=""><img src="/facebook.png" alt="" /></a>
            <a href=""><img src="/youtube.png" alt="" /></a>


        </div> */}
      </div>
    </div>
  )
}

export default Navbar;

