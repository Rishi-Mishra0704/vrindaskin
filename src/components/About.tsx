"use client";
import React, { useRef, useEffect, useState } from "react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (aboutRef.current) {
      const top = aboutRef.current.getBoundingClientRect().top;
      setIsVisible(top < window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on component mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      className={`about-section ${isVisible ? "animate-fade-in" : ""}`}
      style={{ position: "relative", zIndex: isVisible ? 1 : "auto" }}
    >
      <div className="md:w-2/3 lg:w-1/2 mx-auto">
        <h1 className="text-4xl text-purple-400 text-center mt-4">About Us</h1>
        <div className="p-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full md:h-96 lg:h-120"
              src="https://www.youtube.com/embed/0dl3w_VMTZU"
              allowFullScreen
              title="About Us Video"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
