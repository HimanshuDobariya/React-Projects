import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImg from "../assets/hero-image.png";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "../utility/Animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[650px] relative ">
        <div className="py-10 lg:py-0 font-plafair flex flex-col justify-center">
          <div className="text-center lg:text-left space-y-6">
            <motion.h1
              variants={SlideRight(0.5)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed lg:leading-none"
            >
              Gym Gives You The Perfact{" "}
              <span className="text-primary">Health</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(1)}
              initial="hidden"
              animate="visible"
              className="text-gray-600 lg:max-w-[500px] "
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              vero.amet consectetur adipisicing.
            </motion.p>

            <motion.div
              variants={SlideRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center gap-8 lg:justify-start"
            >
              <button className="btn-primary mt-4">Order Now</button>
              <button className="flex items-center gap-2 mt-4">
                <FaPlay />
                Watch Now
              </button>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-center drop-shadow">
          <motion.img
            variants={SlideLeft(1.5)}
            initial="hidden"
            animate="visible"
            src={HeroImg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
