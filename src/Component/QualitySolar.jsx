import React, { useState } from 'react';

const QualitySolar = () => {
    const [hideDiv, setHideDiv] = useState(true); // Initialize with true to hide the div
    
    const toggleDivVisibility = () => {
        setHideDiv(!hideDiv); // Toggle the hideDiv state
    };
    
    return (
        <>
            <div id='re' className="bg-foot-blue lg:h-auto lg:px-20 lg:py-20 p-5">
                <div className="text-white lg:text-4xl text-[28px] font-normal leading-9 font-antonio lg:mb-9 mb-4">Providing Quality Solar Solutions</div>
                <div className="font-Barlow text-white lg:text-xl text-base font-normal leading-7">
                    Our passion lies in harnessing the power of the sun to create sustainable energy solutions that transform industries and lives. <br />With a meticulous blend of innovation and expertise, we pave the way for a greener future.<br /><br />At Aartech Solonics, solar designing isn't just a service; it's a commitment to engineering excellence. Our experienced team meticulously crafts solar solutions that are tailored to your unique needs. From intricate solar panel layouts to optimizing energy generation, we ensure every aspect is thoughtfully designed.
                </div>
                
                {/* Hidden div */}
                {hideDiv ? null : (
                    <div className="font-Barlow text-white lg:text-xl text-base font-normal leading-7">
                        Our comprehensive suite of services covers the entire spectrum of solar energy integration. Whether you're a residential client looking to reduce utility bills or an industrial player aiming to enhance efficiency, we've got you covered. From <br/>feasibility studies and system design to installation and maintenance, we provide end-to-end support.
                    </div>
                )}

                <button
                    className="lg:w-[190px] w-[145px] lg:h-[49px] h-[44px] border-[1px] border-white lg:text-[17px] text-[16px] font-semibold lg:px-[39px] px-[20px] mb-4 mt-[28px] text-white"
                    onClick={toggleDivVisibility} // Attach the click event handler
                >
                {hideDiv ? 'KNOW MORE' : 'SHOW LESS'}

                </button>
            </div>
        </>
    );
};

export default QualitySolar;
