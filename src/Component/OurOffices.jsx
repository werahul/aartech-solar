import React from 'react'

const OurOffices = () => {
    return (
        <>
            <div className="lg:px-20 lg:py-20 px-5 py-5">
                <div className="title text-red-700 text-4xl font-normal leading-9  font-antonio lg:mt-0 mt-5 lg:mb-9 mb-6">
                    Our Offices
                </div>
                <div className="flexAddres lg:flex lg:space-x-7 lg:space-y-0 space-y-6 ">
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-auto py-4 px-4 " >
                    
                        <div className="boxtitle text-box-red text-2xl font-[800] leading-normal tracking-wide flex items-center justify-center lg:my-4 font-Barlow lg:text-[24px] text-[20px]">
                            REGISTERED OFFICE
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] space-x-10 font-[400]">
                            <ul className='list-disc ml-8 '>
                                <a href="https://goo.gl/maps/NYPZGaFHh2MLaXMK8" target='_blank'><li className='font-Barlow  lg:w-[320px] text-xl lg:leading-relaxed leading-6 my-3  text-foot-blue'>“Ashirwad” E-2/57, Arera Colony, Bhopal, Madhya Pradesh (M.P.) India 462016</li></a>

                                <a href="tel:+917552463593"><li className='font-Barlow lg:text-[20px] text-xl my-3 text-foot-blue'>Tel:+91-755-2463593/ <a href='tel:+917554276335'><span>4276335 </span></a> </li></a>

                                <a href="tel: +919752531167 "><li className='font-Barlow lg:leading-relaxed leading-6  lg:text-[20px] text-xl my-3 text-foot-blue'>Mob No.+91-9752531167, <a href="tel:+919993091167"><span>9993091167</span></a></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-auto py-4 px-4" >
                        <div className="boxtitle text-box-red font-bold flex items-center justify-center lg:my-4 font-Barlow lg:text-[24px] text-[20px]">
                            # Onshore Office USA :
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] lg:space-x-10 font-[400] ">
                            <ul className='list-disc ml-8 '>
                                <a href="#" ><li className='font-Barlow lg:text-[20px] lg:leading-relaxed leading-6  text-xl my-3 w-full text-foot-blue'>16192 Coastal Highway, lewes , Delawar 19958, USA
                                </li></a>
                                <a href=""><li className='font-Barlow lg:text-[20px] text-xl my-3 text-foot-blue'>
                                    Tel:- +1 213 4012727</li></a>

                            </ul>
                        </div>
                    </div>
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-auto py-4 px-4 " >
                        <div className="boxtitle text-box-red font-bold flex items-center justify-center lg:my-4 font-Barlow lg:text-[24px] text-xl">
                            # Onshore Office UK :
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] lg:space-x-10 font-[400] ">
                            <ul className='list-disc ml-8  '>
                                <a href="#" ><li className='font-Barlow lg:leading-relaxed leading-6  lg:text-[20px]  text-xl my-3 w-[80%] text-foot-blue'>71-75 Shelton Street,
                                    Convent Garden London,
                                    United Kingdom
                                </li></a>
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurOffices