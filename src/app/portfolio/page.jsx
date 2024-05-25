"use client"; // top to the file

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Images of Personal Project
import BusTracker from "/public/images/busTracker.png";
import ImageValidator from "/public/images/AWS_Rekognition.png";
import UNO from "/public/images/UNO.png";


const items = [
  {
    id: 1,
    color: "from-black to-logoBlue",
    title: "College Bus Tracking",
    desc: "The College Bus Tracking App is a mobile application developed using React Native and Firebase. It allows users to track buses in real-time and provides essential information about bus routes, schedules, and stops.",
    img: BusTracker,
    link: "https://github.com/kevinfranklin03/bus-Tracker",
  },
  {
    id: 2,
    color: "from-logoBlue to-black",
    title: "Image-Validator",
    desc: "Upload images to Amazon S3 from your local system or generate random images using the unsplash API and then upload it to the S3 bucket. By any chance if the image is found to be explicit it will be deleted from the bucket. The images are sent to the message queue and acknowledged before uploading it to the bucket.",
    img: ImageValidator,
    link: "https://github.com/kevinfranklin03/image-validator",
  },
  {
    id: 3,
    color: "from-black to-logoBlue",
    title: "UNO Multiplayer Online",
    desc: "My first serious web development project. It is a two players clicked-based online game that uses WebSockets protocol, for full duplex communication between the client and the server. This is an online version of the game called ’UNO’.",
    img: UNO,
    link: "https://github.com/kevinfranklin03/uno-multiplayer-online",
  },
];

const Portfolio = () => {

const ref = useRef();
const {scrollYProgress} = useScroll({target:ref})
const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
    return (
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh] relative bg-black" ref={ref}>
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl lg:text-8xl text-center text-logoYellow bg-black opacity-80 font-Space_Grotesk">Personal Projects</div>
          <div className="sticky top-0 flex h-screen gap-4 items-center">
            <motion.div style={{ x }} className="flex">
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-logoBlue to-black" />
            {items.map(item=>(
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}` } key={item.id}>
              <div className="flex flex-col gap-8 text-logoYellow">
                <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl font-Space_Grotesk">{item.title}</h1>
                <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] rounded-3xl">
                  <Image src={item.img} alt="" fill/>
                </div>
                <p className="w-80 md:w-96  lg:w-[500px] lg:text-xl xl:w-[600px] font-Space_Grotesk">{item.desc}</p>
                <Link className="flex justify-end" href={item.link}>
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-logoYellow text-logoBlue font-semibold m-4 rounded-lg">Github</button></Link>
              </div>
            </div>
          ))}
          </motion.div>
          </div>
        </div>
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-5xl text-logoYellow font-Space_Grotesk p-3">Do you have any inventive project initiatives on the horizon?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#DFE9AA">
              <textPath xlinkHref="#circlePath" className="text-l">
                Full Stack Java And Node Js Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto text-sm lg:text-xl bg-logoYellow text-black rounded-full flex items-center justify-center"
          >
            Connect
          </Link>
        </div>
      </div>
      </motion.div>
    );
}

export default Portfolio;