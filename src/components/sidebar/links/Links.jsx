import React from 'react'
import { motion } from 'framer-motion'
import './Links.scss'



export const Links = () => {

    const items=["Home","About","Skills","Contact"];
    const variants={
        open:{
            transition:{
                staggerChildren:0.1,
            }
        },

        closed:{
            transition:{
                staggerChildren:0.05,
                staggerDirection:-1
            }
        }
    }

    
    const itemvariants={
        open:{
            y:0,
            opacity:1
        },

        closed:{
            y:50,
            opacity:0
        }
    }

  return (
    <motion.div className='links' variants={variants}>
        {items.map(item=>(
            <motion.a whileHover={{scale:1.1}} href={`#${item}`} key={item} variants={itemvariants} whileTap={{scale:0.95}} >{item}</motion.a>
        ))}
    </motion.div>
  )
}



