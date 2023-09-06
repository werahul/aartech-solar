import React, { useState } from 'react'
import { customer1, customer2, customer3, customer4, customer5, customer6, customer7, customer8,customer9, customer10, customer11 } from '../assets/images'

// ... (import statements)

const CustomerLogos = () => {
  const row1 = [customer1, customer2, customer3, customer4, customer5, customer6, customer7, customer8, customer9, customer10, customer11];
  const [index, setIndex] = useState(null);

  return (
    <>
      <div id='logo' className="bg-white lg:h-[347px] h-[230px] lg:px-20 lg:py-20 p-5">
        <div className="title lg:text-4xl text-[28px] text-box-red font-normal font-antonio mb-0 lg:mb-2">
        Our Clients
        </div>
        <div className="marquee">
          <div className="marqueeGroup">
            {row1.map((el, i) => (
              <div key={i} className="imageGroup">
                <img src={el} className={`image ${index === 1 ? "lg:w-full lg:h-auto w-auto h-[200px] " : "lg:w-auto h-auto "   }`} alt={`customer-${i}`} />
              </div>
            ))}
          </div>
          <div className="marqueeGroup">
            {row1.map((el, i) => (
              <div key={i} className="imageGroup">
                <img src={el} className={`image ${index === 1 ? "lg:w-full lg:h-auto h-[100px] " : "lg:w-auto h-auto "}`} alt={`customer-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerLogos;

