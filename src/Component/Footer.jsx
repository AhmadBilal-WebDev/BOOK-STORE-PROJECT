import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import sampleLogo01 from "../Images/footerLogo.svg";
import logoimg from "../Images/sample01.svg";
const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-r from-pink-50 via-white to-yellow-50 text-gray-800 py-12 px-5 md:px-20">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={sampleLogo01} alt="" className="mb-6" />
          <p className="text-lg mb-6 max-w-xs">
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="flex gap-4 md:gap-10 text-white md:grid md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-full p-3 bg-[#ED553B]">
              <FaFacebookF className="w-6 h-6" />
            </div>
            <div className="rounded-full p-3 bg-[#ED553B]">
              <FaLinkedinIn className="w-6 h-6" />
            </div>
            <div className="rounded-full p-3 bg-[#ED553B]">
              <FaTwitter className="w-6 h-6" />
            </div>
            <div className="rounded-full p-3 bg-[#ED553B]">
              <FaYoutube className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-orange-500 mb-4">COMPANY</h3>
          <ul className="space-y-2 font-semibold">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>BOOKS</li>
            <li>EBOOKS</li>
            <li>NEW RELEASE</li>
            <li>CONTACT US</li>
            <li>BLOG</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            LATEST NEWS
          </h3>

          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-3">
                <img
                  src={logoimg}
                  alt="News"
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h4 className="font-bold text-orange-500 mb-1">
                    Nostrud exercitation
                  </h4>
                  <p className="text-gray-600">
                    Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                  <p className="text-[11px] text-yellow-500 mt-1">
                    15 April 2022
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-700">© 2022 Arihant. All Rights Reserved.</p>
        <div className="flex gap-2 mt-2 md:mt-0">
          <span className="text-orange-500 font-semibold cursor-pointer">
            Privacy
          </span>
          <span className="text-gray-400">|</span>
          <span className="cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
