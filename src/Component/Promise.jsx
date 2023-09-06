import React from 'react'
import { pr1, pr2, pr3, pr4, pr5 } from '../assets/images'

const Promise = () => {
    return (
        <>
            <div className="bg-foot-blue h-auto lg:px-20 lg:py-20 px-5 py-10 ">
                <div className="title text-white lg:text-4xl text-[28px] font-normal leading-9  font-antonio lg:mt-2 mt-5 lg:mb-9 mb-6">
                    Aartech Promise
                </div>
                <div className="lg:flex flex-row justify-evenly w-full lg:space-y-0 space-y-8" >
                    <div className="flex lg:flex-col w-full lg:items-start items-center lg:space-x-0 space-x-10">
                        <div className="w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center lg:mb-6" >
                            <img src={pr1} alt="" />
                        </div>
                        <div className="text-white lg:text-2xl text-xl font-medium tracking-widest font-Barlow"><h2 className='leading-7'>First-time <br />right guarantee</h2></div>
                    </div>
                    <div className="flex lg:flex-col w-full lg:items-start items-center lg:space-x-0 space-x-10">
                        <div className="w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center lg:mb-6" >
                            <img src={pr2} alt="" />
                        </div>
                        <div className="text-white lg:text-2xl text-xl font-medium leading-normal tracking-widest font-Barlow"><h2 className="leading-7">Unparalleled <br/>service<br/></h2></div>
                    </div>
                    <div className="flex lg:flex-col w-full lg:items-start items-center lg:space-x-0 space-x-10">
                        <div className=" customHW2 lg:w-[100px] w-[126px] h-[100px] bg-white rounded-full flex justify-center items-center lg:mb-6" >
                            <img src={pr3} alt="" />
                        </div>
                        <div className="text-white lg:text-2xl text-xl font-medium leading-normal tracking-widest font-Barlow"><h2 className="leading-7">Customised solutions</h2></div>
                    </div>
                    <div className="flex lg:flex-col w-full lg:items-start items-center lg:space-x-0 space-x-10">
                    <div className="lg:w-[100px] w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center lg:mb-6" >
                            <img src={pr4} alt="" />
                        </div>
                        <div className="text-white lg:text-2xl text-xl font-medium leading-normal tracking-widest font-Barlow"><h2 className="leading-7">Value-driven <br /> cost</h2></div>
                    </div>
                    <div className="flex lg:flex-col w-full lg:items-start items-center lg:space-x-0 ">
                        <div className="customHW lg:w-[100px] w-[154px] h-[100px] bg-white rounded-full flex justify-center items-center lg:mb-6" >
                            <img src={pr5} alt="" />
                        </div>
                        <div className="text-white lg:text-2xl text-xl font-medium leading-3 tracking-widest font-Barlow lg:ml-0 ml-8 "><h2 className='leading-7'>Efficiency-driven Approach</h2></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Promise