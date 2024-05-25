"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import githubImage from "../../../public/images/github.png"
import instagram from "../../../public/images/instagram.png"
import linkedin from "../../../public/images/linkedin.png"

import faceBook from "../../../public/images/facebook.png"
import NavLink from "./navLinks";
import { motion } from "framer-motion";

const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"},
];

const Navbar = () => {

    const [open, setOpen] = useState(false);  

    // Hamburger animation

    const topVariants= {
        closed: {
            rotate:0
        },

        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)"
        },
    }

    const centerVariants={
        closed: {
            opacity: 1
        },

        opened: {
            opacity: 0,
           
        },
    }

    const bottomVariants= {
        closed: {
            rotate:0
        },

        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)"
        },
    }


    // menu list Animation
    
    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        }, 
        opened: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            {/* Links */}
            <div className="hidden md:flex gap-4 w-1/3 text-logoYellow">
                {links.map((link) =>(
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>
           {/* LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="/" className="text-sm bg-logoBlue rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-logoYellow mr-1 font-Space_Grotesk">Frankie</span>
                    <span className="w-12 h-8 rounded bg-logoYellow text-logoBlue flex items-center justify-center font-Space_Grotesk">.dev</span>
                </Link>
            </div>
            {/* Social */}
            <div className="hidden md:flex  w-1/4 justify-between">
                <Link href="https://github.com/kevinfranklin03">
                <Image src={githubImage} alt="/" width={27} height={27}/>
                </Link>
                <Link href="https://en-gb.facebook.com/">
                <Image src={faceBook} alt="/" width={27} height={27} />
                </Link>
                <Link href="https://www.instagram.com/">
                <Image src={instagram} alt="/" width={27} height={27} />
                </Link>
                <Link href="https://www.linkedin.com/in/kevinfranklin03/">
                <Image src={linkedin} alt="/" width={27} height={27} />
                </Link>
                
            </div>
            {/* Responsive menu */}
            <div className="md:hidden">
                {/* Menu button */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setOpen((prev)=> !prev)}>
                    <motion.div animate={open ? "opened": "closed"} variants={topVariants}  className="w-10 h-1 bg-logoYellow  rounded origin-left"></motion.div>
                    <motion.div animate={open ? "opened": "closed"} variants={centerVariants} className="w-10 h-1 bg-logoYellow  rounded"></motion.div>
                    <motion.div animate={open ? "opened": "closed"} variants={bottomVariants} className="w-10 h-1 bg-logoYellow  rounded origin-left"></motion.div>
                </button>
                {/* Menu List */}
                { open && (
                <motion.div variants={listVariants} initial="closed" animate= "opened" className="absolute top-0 left-0 h-screen bg-black text-white font-Space_Grotesk flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    {links.map(link=>(
                    <motion.div variants={listItemVariants} className="">
                        <Link href={link.url} key={link.title}>
                            {link.title}
                        </Link>
                    </motion.div>
                    ))}
                </motion.div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
