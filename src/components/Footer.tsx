import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-amber-100">
      <div className="md:flex justify-between text-black">
        <div className="w-full md:w-2/3 pr-0 md:pr-10 mb-6 md:mb-0">
          <h3 className="mb-5 font-semibold">About</h3>
          <p className="text-lg text-gray-800">
            Vrunda skin is built on a foundation of our ancient Ayurveda,
            science & research to provide affordable, dermatology-inspired
            products for everyone. We want to inspire you to embrace your
            beauty, while providing pimples/acne treatments that leave your skin
            #vrundaskin
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="mb-5 font-semibold">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-lg text-pink-600 hover:text-pink-700">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-lg text-pink-600 hover:text-pink-700">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-lg text-pink-600 hover:text-pink-700">
                Youtube
              </a>
            </li>
            <li>
              <a href="#" className="text-lg  text-pink-600 hover:text-pink-700">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
