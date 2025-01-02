"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import traverse from "/assets/AIPPM.jpg";

interface InteractiveImageProps {
  src: StaticImageData; // Use StaticImageData for the image type
  text: string; // Text to display on hover
}

const InteractiveImage = ({ src, text }: InteractiveImageProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative mx-auto w-full max-w-[500px] h-[300px] flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
          hovered ? "translate-x-[-100%]" : "translate-x-0"
        }`}
      >
        <Image
          src={src}
          alt="Interactive Image"
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Expanding Box */}
      <div
        className={`absolute top-0 right-0 h-full bg-[#d6c451] rounded-lg transition-all duration-500 ${
          hovered ? "w-full p-8" : "w-0 p-0"
        }`}
      >
        {hovered && <p className="text-black text-lg">{text}</p>}
      </div>
    </div>
  );
};

export default function InteractiveSection() {
  return (
    <section className="bg-transparent pt-20 pb-30 relative min-h-screen overflow-hidden">
    {/* Title and Subtitle */}
    <div className="text-center mb-30 mt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-[#d6c451]">
        AIPPM Agenda
      </h1>
      <h3 className="text-lg md:text-xl text-gray-300 mt-6">
        Defensive Security Concepts and Policies
      </h3>
      <h1 className="text-4xl mt-32 md:text-5xl font-bold text-[#d6c451]">
        AIPPM EXECUTIVE BOARD
      </h1>
    </div>
  
    {/* Interactive Images */}
    <div className="flex flex-col items-center justify-center gap-10 px-4">
      <InteractiveImage
        src={traverse}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <InteractiveImage
        src={traverse}
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      />
      <InteractiveImage
        src={traverse}
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse."
      />
    </div>
  </section>

  );
}
