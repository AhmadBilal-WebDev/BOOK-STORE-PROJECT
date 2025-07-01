import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LiaBloggerB } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineShopping } from "react-icons/ai";
import { RiPokerHeartsLine } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activateBtn, setActivateBtn] = useState(null);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuBtn = [
    "HOME",
    "ABOUT US",
    "BOOKS",
    "NEW RELEASE",
    "CONTACT US",
    "BLOG",
    "ACCOUNT",
    "CARTS",
    "WHISHLIST",
  ];
  const menuBtn1 = [
    "HOME",
    "ABOUT US",
    "BOOKS",
    "NEW RELEASE",
    "CONTACT US",
    "BLOG",
  ];

  return (
    <>
      <section className="bg-[#393280] px-5 w-full h-[3rem] md:h-[4rem] flex justify-between items-center md:px-10">
        <div className="">
          <p className="text-white flex gap-1 items-center font-bold md:text-xl">
            <span>
              <IoCall />
            </span>
            <span>+91 8374902234</span>
          </p>
        </div>

        <div className="flex gap-5 text-white sm:gap-10 md:text-xl">
          <p>
            <button>
              <FaFacebookF />
            </button>
          </p>
          <p>
            <button>
              <IoLogoInstagram />
            </button>
          </p>
          <p>
            <button>
              <FaLinkedinIn />
            </button>
          </p>
          <p>
            <button>
              <FaTwitter />
            </button>
          </p>
          <p>
            <button>
              <LiaBloggerB />
            </button>
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10">
        <div className="h-[6rem] flex justify-between items-center md:h-[7rem]">
          <div className="bg-gray-300 h-14 w-14 rounded-full md:h-20 md:w-20"></div>

          <div className="flex items-center relative">
            <input
              type="text"
              className="bg-gray-200 rounded-full h-7 w-[12rem] px-3 text-sm sm:w-[18rem] md:h-9 md:w-[18rem] md:px-5 lg:w-[33rem] lg:h-10"
              placeholder="Search Books"
            />
            <IoIosSearch className="absolute right-3 md:right-4" />
          </div>

          <div className="md:hidden">
            {isOpen ? (
              <IoCloseSharp
                className="text-gray-500 text-[1.5rem]"
                onClick={handleMenu}
              />
            ) : (
              <GiHamburgerMenu
                className="text-gray-500 text-2xl"
                onClick={handleMenu}
              />
            )}
          </div>

          <div className="justify-between items-center text-[#393280] font-semibold text-sm hidden md:flex space-x-4">
            <button className="flex items-center gap-2">
              <LuUserRound />
              ACCOUNT
            </button>

            <p className="">|</p>

            <button className="flex items-center gap-2">
              <AiOutlineShopping />
              CARTS:(0$)
            </button>

            <p className="">|</p>

            <button className="flex items-center gap-2">
              <RiPokerHeartsLine />
              WISHLIST
            </button>
          </div>
        </div>

        <div className="w-full h-[0.100rem] bg-gray-300"></div>

        <div className="hidden justify-center gap-10 mt-8 md:flex">
          {menuBtn1.map((items, index) => (
            <div key={index} className="flex gap-10">
              {items}
              <p className="w-[0.100rem] h-[1.6rem] bg-gray-300"></p>
            </div>
          ))}
        </div>

        {isOpen && (
          <ul className="space-y-2 md:hidden">
            {menuBtn.map((items, index) => (
              <li
                key={index}
                className={`cursor-pointer${
                  activateBtn === index ? "text-red-500" : "text-black"
                }`}
                onClick={() => setActivateBtn(index)}
              >
                {items}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Header;
