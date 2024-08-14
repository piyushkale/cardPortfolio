import React from 'react'
import "./components.css"
import { motion } from 'framer-motion'

const compVariant={
    hidden:{
      opacity:0,y:-100
    },
    visible:{
      opacity:1,y:0,
    }
  }
  const h1Variant={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,transition:{delay:0.3}
    }
  }
const Whatido = () => {
  return (
    <>
    <motion.div className='flex justify-center items-start w-[90vw] rounded-xl p-11 h-full components-style' 
    initial="hidden"
    animate="visible"
    variants={compVariant}
    >
      <motion.ul className="text-2xl p-6 tracking-wide text-start backdrop-blur-3xl shadow-md shadow-slate-700 mx-4 rounded-lg  text-slate-300 whatdo-ul"  variants={h1Variant}>
        <h1 className='mb-4'>I create interactive websites using:</h1>
        <li>HTML/CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>TAILWIND</li>
        <li>FRAMER MOTION</li>
      </motion.ul>
    </motion.div>
  
   </>
  )
}

export default Whatido