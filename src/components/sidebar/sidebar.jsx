import React from 'react'
import { Links } from './links/Links'
import { Togglebutton } from './Togglebutton/Togglebutton'
import './sidebar.scss'
import { useState,useEffect } from 'react'
import { motion } from 'framer-motion'

import "../home/home.scss"

export const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)
    const sidebarRef = React.useRef(null);

    const variants={
        open:{
             clipPath: "circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness: 20,
            }

        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay:0.1,
                type:"spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

    
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setSidebar(false);
            }
        };

        if (sidebar) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [sidebar]);

  return (
    <motion.div className='sidebar' ref={sidebarRef} animate={sidebar?"open":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>

        

        <Togglebutton setSidebar={setSidebar} sidebar={sidebar}/>

    </motion.div>
  )
}
