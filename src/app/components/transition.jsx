"use client"

import { AnimatePresence } from "framer-motion"
import Navbar from "./navbar"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const Transition = ({children}) => {

  const pathName =  usePathname();

    return (
        <AnimatePresence mode="wait">
          <div key={pathName} className=" font-Space_Grotesk lg:h-screen  xl:h-screen  bg-cover bg-center bg-[url('../../public/images/earth-wallpaper.png')] ">

            <motion.div 
              className="h-screen w-screen fixed bg-logoYellow rounded-b-[100px] z-40" 
              animate={{height: "0vh"}}
              exit={{height:"140vh"}}
              transition={{duration: 0.5, ease:"easeOut"}}
            /> 
            <motion.div 
              className="fixed m-auto top-0 bottom-0 left-0 right-0 text-black text-8xl cursor-default  z-50 w-fit h-fit" 
              initial={{opacity: 1}}
              animate={{opacity: 0}}
              exit={{opacity: 0}}
              transition={{duration: 0.8, ease:"easeOut"}}
            >
               {pathName.substring(1)} 
            </motion.div>
             <motion.div 
             className="h-screen  w-screen fixed rounded-t-[100px] bottom-0 bg-logoYellow  z-30" 
              initial={{height: "140vh"}}
              animate={{height:"0vh", transition:{delay: 0.5}}}
              
            /> 
           
            
            <div className="h-24">
              <Navbar/>
            </div>
            <div className="h-[calc(100vh - 6rem)]">{children}</div>
          </div>
        </AnimatePresence>
    )
}

export default Transition;