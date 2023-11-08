import React from "react";
import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoYoutube,
  BiLogoLinkedinSquare
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-purple-400">
      <div className="md:flex justify-between text-gray-900">
        <div className="w-full md:w-2/3 pr-0 md:pr-10 mb-6 md:mb-0">
          <h3 className="mb-3 text-2xl font-semibold">About</h3>
          <p className="text-lg text-gray-700">
            Vrunda skin is built on a foundation of our ancient Ayurveda,
            science & research to provide affordable, dermatology-inspired
            products for everyone. We want to inspire you to embrace your
            beauty, while providing pimples/acne treatments that leave your skin
            #vrundaskin
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="mb-3 text-2xl font-normal">Socials</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.instagram.com/vrundaskin/?utm_medium=copy_link&hl=en"
                className="flex text-lg text-gray-700 hover:text-gray-200"
                target="_blank"
              >
                <BiLogoInstagramAlt className="text-2xl mx-1" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/people/Vrunda-skin-oil-serum/100076303071789/?mibextid=LQQJ4d"
                className="flex text-lg text-gray-700 hover:text-gray-200"
                target="_blank"
              >
                <BiLogoFacebookSquare className="text-2xl mx-1" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@vrundaskin"
                className="flex text-lg text-gray-700 hover:text-gray-200"
                target="_blank"
              >
                <BiLogoYoutube className='text-2xl mx-1'/> Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vrunda-skin-5b2720273/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="flex text-lg  text-gray-700 hover:text-gray-200"
                target="_blank"
              >
                <BiLogoLinkedinSquare className='text-2xl mx-1'/> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
