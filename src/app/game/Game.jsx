"use client"; // This is a client component 👈🏽

import { useRef } from "react";
import ConnectGame from "./ConnectGame";

export default function SpaceInvader({ className }) {
  const canvasRef = useRef(null);

    return (
      <div>
      <ConnectGame canvasRef={canvasRef}/>
     </div>
    );
        }

    // display: "flex",
    //  alignItems: "center",
    //  justifyContent: "center",
    //  flexDirection: "column",
    //  padding: "0",
    //  margin: "0",
    //  minHeight: "10vh", // Ensure at least full viewport height

    // h1{{margin: "0px", marginBottom: '10px', fontSize: "2.9em", fontFamily:"Helvetica"}}