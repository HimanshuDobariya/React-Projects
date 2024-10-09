import React from "react";
import { testimonialsData } from "../data/Data";
import Slider from "react-slick";
import { div } from "framer-motion/client";

const Testimonials = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay :  true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="container py-14">
      <div className="text-left mb-10 max-w-[500px]">
        <h1 className="text-4xl font-semibold font-plafair ">
          {" "}
          What Are The Costumer Saying About Us
        </h1>
      </div>

      <div>
        <Slider {...settings}>
          {testimonialsData.map((item) => (
            <div key={item.id} className=" my-6">
              <div className="p-8 bg-primary/10 rounded-xl  mx-4 shadow-lg">
                <div className="flex justify-start items-center gap-5">
                  <img
                    src={item.image}
                    alt=""
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <p className="text-xl font-bold text-black/80">
                      {item.name}
                    </p>
                    <p>{item.name}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <p className="text-sm text-gray-500">{item.text}</p>
                  <p className="text-2xl text-yellow-400 text-center">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
