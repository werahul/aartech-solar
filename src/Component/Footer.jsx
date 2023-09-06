import React from "react";
import { footImg, linkedin } from "../assets/images";

const Footer = () => {
  return (
    <>
      <div className="mainFOOT lg:px-20 pt-20 p-5 bg-[#0C013D] h-auto text-white">
        <div className="footsec lg:flex justify-between items-start ">
          <div className="first-col lg:flex space-x-20">
            <div className="footImg flex items-center flex-row lg:fle-col space-x-20 lg:space-x-0">
              <img src={footImg} alt="" className="w-32 lg:w-64" />
              <div className="contactImg lg:hidden flex space-x-4 top-[-420px] lg:top-0 right-[90px]  lg:right-[150px]  items-center justify-center  ml-[2rem] lg:-ml-[26px]  ">
                <span className="font-Barlow text-[20px] font-bold whitespace-nowrap">
                  Follow us
                </span>{" "}
                <a
                  href="https://www.linkedin.com/company/aartech-solonics-limited/"
                  target="_blank"
                >
                  <img src={linkedin} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
          <div className="sec-col my-4 lg:my-0">
            <div className="address w-72 font-Barlow font-semibold uppercase text[18px]">
              “Ashirwad” E-2/57, Arera Colony, Bhopal, Madhya Pradesh (M.P.)
              India 462016 Tel:+91-755-2463593/4276335 Mob No. +91-9752531167,
              9993091167
              <div className="contact-button">
               <a href="#contact"> <button className="border border-slate-100 outline-none py-2 px-3 text-sm my-4">
                  CONTACT US
                </button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footbottom  justify-end mr-[155px] font-Barlow flex mt-3 ">
          <div className="contactImg hidden lg:flex space-x-4   items-center justify-center    ">
            <span className="font-Barlow text-[20px] font-bold whitespace-nowrap ">
              Follow us
            </span>{" "}
            <a
              href="https://www.linkedin.com/company/aartech-solonics-limited/"
              target="_blank"
            >
              <img src={linkedin} alt="" className="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
