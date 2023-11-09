"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "./animation"; // Adjust the import path
import Link from "next/link";

const AnimatedText = styled.div`
  animation: 1.5s ${fadeIn};
`;

const Hero = () => {
  return (
    <div className="bg-gradient-to-r p-4 from-purple-600 to-purple-400 text-white h-screen flex flex-col justify-center">
      <AnimatedText>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-300 text-left leading-tight mb-6">
          Discover Your Skin's Natural Beauty
        </h1>
      </AnimatedText>
      <AnimatedText>
        <p className="text-lg md:text-xl  text-left max-w-2xl">
          Vrunda Skin is a fusion of ancient Ayurveda, modern science, and
          extensive research. We offer dermatology-inspired products that make
          clear and radiant skin accessible to all. Let us empower your beauty
          while providing effective pimple and acne treatments that reveal your
          #VrundaSkinGlow.
        </p>
      </AnimatedText>
      <AnimatedText className="mt-4">
        <Link
          href="/#about"
          className="bg-white text-purple-600 w-40 font-bold py-2 px-4 rounded-full mt-8"
        >
          Learn More
        </Link>
      </AnimatedText>
    </div>
  );
};

export default Hero;
