"use client";

import SpaceInvader from "./game/Game";
import { motion } from "framer-motion";

const Homepage = () => (

    <motion.div className="h-full flex justify-center items-center">
      {/* GAME CONTAINER */}
      <div className="fixed left-10 top-1/4  hidden lg:block">
        <SpaceInvader className="" />
      </div>

      {/* TEXT CONTAINER */}
    <div className="fixed right-10 top-1/2 transform -translate-y-1/2 lg:w-1/3 flex flex-col gap-8 text-logoYellow ">
        {/* TITLE */}
        <h1 className="text-4xl xl:text-5xl lg:text-3xl md:text-3xl font-pixel mr-2">
          Crafting Digital Marvels: Full Stack Developer Ready to Build Your
          Next Big Thing!
        </h1>
        {/* DESC */}
        <p className="md:text">
          I specialize in bridging the gap between backend functionality and
          frontend aesthetics. Whether it's designing dynamic web applications,
          optimizing user experiences, or diving into the latest tech
          innovations, I thrive on turning ideas into impactful realities.
          Explore my portfolio to witness the fusion of creativity and code in
          action.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-10 justify-center">
          <button className="p-4 rounded-lg ring-1 ring-logoBlue bg-logoBlue">
            Explore My Projects
          </button>
          <button className="p-4 rounded-lg ring-1 ring-logoBlue">
            Get in Touch
          </button>
        </div>
      </div>
    </motion.div>
 
);

export default Homepage;
