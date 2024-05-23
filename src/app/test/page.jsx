"use client"; // top to the file

import { motion } from "framer-motion";

const Test = () => {
    return (
        <div className="text-white flex h-full item-center justify-center">
            <motion.div className="w-96 h-96 bg-red-400 rounded" 
            initial={{x:-100}}
             animate={{x:100, y:300}}>
            </motion.div>
        </div>
    )
}

export default Test;