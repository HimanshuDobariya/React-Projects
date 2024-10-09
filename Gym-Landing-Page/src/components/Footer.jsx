import React from "react";
import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import { SlideLeft } from "../utility/Animation";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white gap-x-6 py-5 ">
          <motion.div
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            className="py-8 px-4 space-y-4 sm:col-span-2 md:col-span-3 lg:col-span-1 "
          >
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <FaDumbbell />
              <p>Coder</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              placeat quaerat doloribus odit perferendis autem blanditiis, nihil
              pariatur iusto accusamus.
            </p>
            <div className="flex items-center gap-4">
              <a href="#">
                <HiLocationMarker className="text-3xl hover:text-primary" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col p-4 space-y-2"
          >
            <h1 className="text-xl mb-5 font-bold lg:text-2xl">
              Important Links
            </h1>
            <a href="#">Home </a>
            <a href="#">About </a>
            <a href="#">Services </a>
            <a href="#">Login </a>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col p-4 space-y-2"
          >
            <h1 className="text-xl mb-5 font-bold lg:text-2xl">
              Important Links
            </h1>
            <a href="#">Home </a>
            <a href="#">About </a>
            <a href="#">Services </a>
            <a href="#">Login </a>
          </motion.div>
          <motion.div
            variants={SlideLeft(1.2)}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col p-4 space-y-2"
          >
            <h1 className="text-xl mb-5 font-bold lg:text-2xl">
              Important Links
            </h1>
            <a href="#">Home </a>
            <a href="#">About </a>
            <a href="#">Services </a>
            <a href="#">Login </a>
          </motion.div>
        </div>
        <div className="mt-8">
          <div className="text-center py-6 border-t-2 border-gray-300/10">
            <span className="text-sm text-gray-300 opacity-70">
              @copyright 2024 Himanshu Dobariya
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
