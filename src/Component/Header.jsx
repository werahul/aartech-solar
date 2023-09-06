import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { image2, image3, mIg1, mIg2 } from "../assets/images";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="top-[80px] lg:top-[88px] relative">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        selectedItem={currentSlide}
        onChange={handleSlideChange}
      >
    
        <div>
          { isMobile ?(<img src={mIg1} alt="Image 3" />) :  (<img src={image3} alt="Image 3" />)}

        </div>
        <div>
        { isMobile ?(<img src={mIg2} alt="Image 3" />) :  (<img src={image2} alt="Image 2" />)}
        </div>

      </Carousel>
      <div className="absolute  left-1/2 transform -translate-x-1/2 bottom-2">
        <div className="flex space-x-2">
          <div
            onClick={() => handleDotClick(0)}
            className={`w-2 h-2 rounded-full ${currentSlide === 0 ? "bg-red-700 " : "bg-transparent border-white border"
              } cursor-pointer`}
          ></div>
          <div
            onClick={() => handleDotClick(1)}
            className={`w-2 h-2 rounded-full ${currentSlide === 1 ? "bg-red-700" : "bg-transparent border-white border"
              } cursor-pointer`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
