"use client"; // top to the file

import { motion, useInView, useScroll } from "framer-motion";
import Brain from "../components/brain.jsx";
import { useRef } from "react";

const About = () => {

  const { scrollYProgress } = useScroll()

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });



  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
    className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      
    >
      {/* CONTAINER */}
      <div className="h-full lg:flex" >
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-24 md:gap-32 lg:gap-48 lg:pr-0 xl:gap-64 bg-black bg-opacity-80 lg:w-2/3 xl:1/2">
          {/* BioGraphy Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Bio Title */}
            <h1 className="font-bold text-2xl text-logoYellow">BIOGRAPHY</h1>
            <p className="text-xl text-logoYellow w-25 font-Space_Grotesk">
            As a graduate student enrolled in the Master's program for
              Computer Science at Ulster University Belfast, my fervor lies in
              the realm of Software Development. Bolstered by a robust academic
              foundation in programming, I am dedicated to expanding the
              frontiers of knowledge in the maintenance and advancement of
              software systems. Throughout my academic odyssey, I've embraced
              obstacles as avenues for personal and scholarly maturation.
              Whether immersed in research endeavors, collaborating harmoniously
              with peers, or actively participating in community endeavors, I
              ardently endeavor to contribute meaningfully towards societal
              betterment. I eagerly anticipate the continued evolution of my
              academic and personal journey as I strive to realize my
              aspirations.
            </p>
            {/* Bio Quote */}
            <span className="italic text-logoYellow mb-20">
              Embrace challenges, innovate tirelessly, and impact society with
              every keystroke.
            </span>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke= '#DFE9AA'
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#DFE9AA" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#DFE9AA"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Skills */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
             initial={{ x: "-300px" }}
             animate={isSkillRefInView ? { x: 0 } : {}}
             transition={{ delay: 0.2 }}
             className="font-bold text-2xl text-logoYellow"
            >SKILLS</motion.h1>
            
            {/* Skill List */}
            <div className="gap-4 flex flex-wrap mb-40">
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                NodeJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                PostGres SQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                MariaDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                Express
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                NextJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                NestJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                Type Script
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                SpringBoot
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                Tailwind
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                React Native
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                GIT
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                Docker
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-logoYellow hover:bg-logoBlue hover:text-white">
                AWS Service
              </div>
            </div>
            {/* Scroll button */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#DFE9AA"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#DFE9AA" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#DFE9AA"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
          <motion.h1
             initial={{ x: "-600px" }}
             animate={isExperienceRefInView ? { x: 0 } : {}}
             transition={{ delay: 0.2 }}
             className="font-bold text-2xl text-logoYellow mt-10"
          >EDUCATION AND EXPERIENCE</motion.h1>
            
            {/* EXPERIENCE LIST */}
            <div className="">
              {/* LIST ITEMS LEFT */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* title */}
                  <div className="text-black  p-3 font-semibold rounded-b-lg rounded-s-lg bg-logoYellow bg-opacity-80">Masters In Computer Science</div>
                  {/* description */}
                  <div className="text-logoYellow p-3 text-sm italic">
                    Currently studying advanced programming fundamentals
                  </div>
                  {/* date */}
                  <div className="p-3 text-sm font-semibold text-red-400">2024 - Present</div>
                  {/* Place */}
                  <div className="text-logoYellow p-1 rounded text-sm w-fit font-semibold">Ulster University Belfast</div>
                </div>
                {/* Center */}
                <div className="w-1/6">
                  {/* Center Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-logoYellow ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>

               {/* LIST ITEMS Right */}
               <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 "></div>
                {/* Center */}
                <div className="w-1/6">
                  {/* Center Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-logoYellow -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3 ">
                  {/* title */}
                  <div className="text-black  p-3 font-semibold rounded-b-lg rounded-s-lg bg-logoYellow bg-opacity-80">Software Developer Intern</div>
                  {/* description */}
                  <div className="text-logoYellow p-3 text-sm italic">
                    Developed Website for gaming events.
                  </div>
                  {/* date */}
                  <div className="p-3 text-sm font-semibold text-red-400">2023 Mar - 2023 Oct </div>
                  {/* Place */}
                  <div className="text-logoYellow p-1 rounded  text-sm w-fit font-semibold">The Esports Club</div>
                </div>
              </div>

                {/* LIST ITEMS LEFT */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 ">
                  {/* title */}
                  <div className="text-black  p-3 font-semibold rounded-b-lg rounded-s-lg bg-logoYellow bg-opacity-80">Bachelors In Computer Science</div>
                  {/* description */}
                  <div className="text-logoYellow p-3 text-sm italic">
                  gained fundamental programming knowledge during my bachelor's
                  </div>
                  {/* date */}
                  <div className="p-3 text-sm font-semibold text-red-400">2024 - Present</div>
                  {/* Place */}
                  <div className="text-logoYellow p-1 rounded  text-sm w-fit font-semibold">Ulster University Belfast</div>
                </div>
                {/* Center */}
                <div className="w-1/6">
                  {/* Center Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-logoYellow -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>

            </div>
          </div>
        </div>
        {/* SVG Container */}
        <div className="hidden lg:block w-1/3 mt-10 sticky top-0 z-30 xl:w-1/3" style={{height: "700px"}}>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
