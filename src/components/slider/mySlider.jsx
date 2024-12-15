import React, { forwardRef, useContext } from "react";
import Slider from "react-slick";
import myContext from "./context";

const customSlider =forwardRef((prop,ref)=>{
const {slides} = useContext(myContext)
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll:1,
    initialSlide: 1,
    draggable: false,  // Disable mouse drag
    swipe: false ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll:1,
          infinite: true
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true

        }
      }
    ]
  };
  return (
    <div className="slider-container w-full ">
      <Slider ref={ref} {...settings}>
        {
          slides.map((slide, index) => (
            <div key={index} className="size-[80px] flex  md:size-[120px]  ">
              <img src={slide.image} alt={slide.title} className="h-full border-[1px] border-gray-400 rounded-md p-3 object-cover" />
              
            </div>
          ))
        }
      
      </Slider>
    </div>
  );
})

export default customSlider;
