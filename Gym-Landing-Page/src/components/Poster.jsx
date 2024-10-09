import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/Animation";

const Poster = () => {
  return (
    <div className="container my-14">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex flex-col items-center justify-center gap-8">
        <div className="space-y-6 text-center mx-12 md:mx-24">
          <motion.h1
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            className="text-3xl lg:text-5xl font-bold  uppercase font-plafair"
          >
            Get 20% Discount On Your First Order, Are You Ready To Buy
          </motion.h1>
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
          >
            We will make sure you get the right and the best quality products
            for your workout
          </motion.p>
        </div>
        <motion.div
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center gap-6"
        >
          <button className="btn-primary">Learn More</button>
          <button className=" border-2 border-primary px-5 font-bold text-primary rounded-lg">
            Stay In Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Poster;
