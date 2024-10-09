import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/Animation";

const Banner = ({ data }) => {
  const { image, title, desc, link } = data;
  return (
    <div className="container">
      <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 gap-6 py-14 px-4 space-y-6 md:space-y-0 ">
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                duration: 0.5,
              },
            }}
            src={image}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
          <motion.p
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
            className="text-2xl lg:text-4xl font-plafair font-bold capitalize"
          >
            {title}
          </motion.p>
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
          >
            {desc}
          </motion.p>

          <motion.div
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            className="flex justify-center md:justify-start"
          >
            <button className="btn-primary">Explore More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
