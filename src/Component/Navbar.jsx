import React, { useState } from "react";
import { logo } from "../assets/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-bg z-20 fixed inset-0 h-[80px] lg:h-[88px] flex items-center justify-between ">
      <div className="flex items-center justify-between w-full px-5 md:px-20">
        <div className="z-50">
          <img
            src={logo}
            alt=""
            className="w-[71px] h-[49px] md:w-auto md:h-auto "
          />
        </div>
        <div className="flex items-center  flex-row-reverse lg:flex-row">
          <button
            className="md:hidden z-50 text-white ml-4"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col py-24 px-5   text-[22px] space-y-4 fixed h-screen z-20 inset-0 bg-neutral-800"
            : "hidden lg:flex"
        } flex md:items-center font-Barlow whitespace-nowrap md:space-x-10 mt-0 px-5 md:px-20`}
      >
        <div
          to="/about"
          className="text-white font-bold text-[18px] hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          <a href="#about">ABOUT US</a>
        </div>
        <div
          to="/brands"
          className="text-white font-bold text-[18px] hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
          <a href="#service">OUR SERVICES</a>
        </div>
       {/* <div
          to="/media"
          className="text-white font-bold text-[18px] hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
         <a href="#re"> RE+</a>
      </div>*/}
        <div
          to="/investors"
          className="text-white font-bold text-[18px] hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
            <a href="#logo">CLIENTS</a>
        </div>
        <div
          to="/contact"
          className="text-white font-bold text-[18px] hover:opacity-75"
          onClick={() => setIsMenuOpen(false)}
        >
           <a href="#contact">CONTACT US</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
