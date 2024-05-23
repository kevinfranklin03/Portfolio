"use client"; // top to the file


import { motion } from "framer-motion";


const Contact = () => {
    return (
        <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >contact </motion.div>
    )
}

export default Contact;