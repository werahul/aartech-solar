import React from 'react'
import { abPic1 } from '../assets/images'

// import CarouselAbout from './CarouselForAbout'


const AboutUsHome = () => {
    return (
        <> 

            <div id='about' className="lg:flex flex-row-reverse h-auto justify-between items-center lg:px-20 lg:py-20 py-10 px-5 mt-20" >

                <div className="lg:flex flex-col lg:justify-between justify-center  lg:w-[70%] lg:mb-0 mb-[24px]  ">
                    <div className="title lg:text-4xl text-[28px] text-box-red  font-normal font-antonio lg:mb-9 mb-2">
                        About Us
                    </div>
                    <div className="font-semibold text-box-red lg:text-[24px] leading-[28.8px] text-[20px] font-Barlow lg:mb-[20px] mb-2">Living Passions through Engineering</div>
                    <div className=" font-Barlow lg:font-normal font-medium lg:leading-7 text-lightBlack lg:w-[820px] lg:text-[20px] text-[16px] w-auto leading-[22.4px]  ">Aartech Solonics was founded in 1985 and was converted into a public limited company in 1992. The mission at the time of inception was to be an Application Engineering Specialist. We are trusted by government agencies and policy makers of many countries for bringing in our future ready mindset and the right techniques for the challenges at hand. <br className='lg:block hidden' /><br />
                        <span className='lg:inline-block  '>Over the years, we have grown into a super speciality team who have found their own ways of applying their personal Passions to the world of Engineering. </span>  </div>
                </div>
                <div className=" ">
                    <img src={abPic1} alt="" className='h-auto w-full lg:w-auto' />
                </div>


            </div >
        </>
    )
}

export default AboutUsHome