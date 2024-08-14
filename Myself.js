import React from 'react'
import "./components.css"
import { motion, spring } from 'framer-motion'

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
const Myself = () => {
  return (
   <>
    <motion.div className='flex justify-center items-start w-[90vw] rounded-xl p-11 h-full components-style' 
    initial="hidden"
    animate="visible"
    variants={compVariant}
    >
      <motion.h1 className="text-2xl p-6 tracking-wide text-start backdrop-blur-3xl shadow-md shadow-slate-700 mx-4 rounded-lg  text-slate-300" 
      variants={h1Variant}>Hi, I’m PIYUSH, a passionate <span className='text-indigo-100 font-bold'>Web Developer</span>. I’m learning & exploring the field of web development In-Depth</motion.h1>
    </motion.div>
  
   </>
  )
}

export default Myself