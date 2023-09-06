import React from 'react'

const Contact = () => {
    return (
        <>
            <div id='contact' className="lg:px-20 lg:py-20 px-5 py-5 bg-foot-blue">
                <div className=" text-white lg:text-4xl text-[28px] font-normal font-antonio lg:mb-2">Let's Power Up Together!</div>
                <div className="text-white lg:text-xl text-lg font-medium leading-snug font-Barlow">Drop us a message, and our experts will connect with you</div>
                <div className="form lg:mt-4 mt-1 ">
                    <form action="" className=' ' >
                        <div className="formDiv lg:grid grid-cols-2 lg:gap-x-[10px] lg:space-y-[12px] space-y-[16px]">
                            <input type="text" placeholder='FIRST NAME *' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-white text-white bg-transparent  outline-none py-2 lg:px-6 px-3 h-[50px] w-full font-Barlow placeholder-white mt-3' />
                            <input type="text" placeholder='LAST NAME *' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-white text-white bg-transparent outline-none py-2 lg:px-6 px-3 h-[50px] w-full font-Barlow placeholder-white' />
                            <input type="mail" placeholder='EMAIL ID *' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-white text-white bg-transparent   outline-none py-2 lg:px-6 px-3 h-[50px] w-full font-Barlow placeholder-white' />
                            <input type="number" placeholder='CONTACT NO *' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-white text-white bg-transparent   outline-none py-2 lg:px-6 px-3 h-[50px] w-full font-Barlow placeholder-white' />
                        </div>
                        <textarea type="text" placeholder='YOUR MESSAGE' className="border-[1px] uppercase lg:text-[18px] text-[16px] border-white text-white bg-transparent lg:h-[160px] mt-4  outline-none py-2 lg:px-6 px-3 w-full font-Barlow placeholder-white resize-none h-[149px]" />
                        </form>
                        <button className='font-Barlow bg-box-red text-white p-2 lg:text-[18px] text-[16px] mt-3 lg:w-32 w-[100%] font-semibold h-12 cursor-pointer'>SUBMIT</button>
                </div>
            </div>
        </>
    )
}

export default Contact