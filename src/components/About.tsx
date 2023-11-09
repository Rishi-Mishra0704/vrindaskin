import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="md:w-2/3 lg:w-1/2 mx-auto">
        <h1 className="text-4xl text-purple-400 text-center mt-4">About Us</h1>
        <div className="p-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full md:h-96 lg:h-120" // You can adjust the height here
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
