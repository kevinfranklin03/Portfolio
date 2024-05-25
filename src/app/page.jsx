"use client";

import Link from "next/link";
import SpaceInvader from "./game/Game";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => (

    <motion.div className="h-full flex justify-center items-center">
      {/* GAME CONTAINER */}
      <div className="fixed left-10 top-1/4  hidden lg:block">
        <SpaceInvader className="" />
      </div>

      {/* TEXT CONTAINER */}
    <div className="fixed right-10 top-1/2 transform -translate-y-1/2 lg:w-1/3 flex flex-col gap-8 text-logoYellow ">
      
        {/* TITLE */}
        <TypeAnimation className="text-4xl xl:text-5xl lg:text-2xl md:text-3xl font-Space_Grotesk mr-2"
      sequence={[
        'Forging Digital Wonders: Full Stack Developer Ready to Build Your Next Big Thing!',
        1000, 
        'Forging Digital Wonders: Digital Dynamo Set to Turn Your Crazy Ideas into Reality!',
        1000,
        'Forging Digital Wonders: Pixel Magician Ready to Create Your Next Big Thing!',
        1000, 
        'Forging Digital Wonders: Code Virtuoso Set to Craft Your Next Big Sensation!',
        1000,
        
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: '2.2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        {/* DESC */}
        <p className="md:text font-Space_Grotesk">
          I specialize in bridging the gap between backend functionality and
          frontend aesthetics. Whether it's designing dynamic web applications,
          optimizing user experiences, or diving into the latest tech
          innovations, I thrive on turning ideas into impactful realities.
          Explore my portfolio to witness the fusion of creativity and code in
          action.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-10 justify-center">
          <Link href="/portfolio">
          <button className="p-4 rounded-lg ring-1 ring-logoBlue bg-logoBlue font-Space_Grotesk">
          Explore My Projects
          </button>
          </Link>
          <Link href="/contact">
          <button className="p-4 rounded-lg ring-1 ring-logoBlue font-Space_Grotesk">
          Get In Touch
          </button>
          </Link>
        </div>
      </div>
    </motion.div>
 
);

export default Homepage;
