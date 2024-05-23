"use client"; // top to the file
import Brain from "../components/brain";

import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
    return (
        <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="hidden lg:block w-1/3 xl:w-1/2 bg-white sticky items-center justify-center">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>

        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>

        <div className="m-10 p-10 bg-white ">
          1
        </div>
        <div className="m-10 p-10 bg-white ">
          1
        </div>



      </motion.div>
    )
}

export default Portfolio;