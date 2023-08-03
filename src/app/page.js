"use client";
import Image from "next/image";
import useEyeDropper from "use-eye-dropper";
import { useState } from "react";

export default function Home() {
  const [hex, setHex] = useState("white");
  const { open, close, isSupported } = useEyeDropper();
  const pickColor = (e) => {
    e.preventDefault();
    open()
      .then((color) => {
        setHex(color.sRGBHex);
      })
      .catch((error) => console.log(error));
  };
  if (isSupported()) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-500 uppercase font-thin text-4xl text-center mb-9">
          Unbelievably fancy and complex color picker app
        </h1>
        <button className="mb-9" onClick={pickColor}>
          <span className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-sky-800 rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Pick A Color</span>
          </span>
        </button>
        {hex}
        <div
          style={{
            height: "20rem",
            width: "20rem",
            borderRadius: "50%",
            backgroundColor: hex,
          }}
        ></div>
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>This doesn't work unless you are on Chrome</h1>
      </main>
    );
  }
}
