import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { SlideLeft } from "../utility/Animation";
import { delay, motion } from "framer-motion";

const offersData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <FaDumbbell />,
    delay: 0.7,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GiGymBag />,
    delay: 1.1,
  },
];

const Offers = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-plafair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl lg:text-4xl">What we offer for you</h1>
            <p className="text-gray-500">
              It is a long established fact that a reader readable.
            </p>
          </div>

          {offersData.map((offer) => {
            return (
              <motion.div
                variants={SlideLeft(offer.delay)}
                initial="hidden"
                whileInView="visible"
                className="space-y-4 p-6 rounded-lg bg-[#fbfbfb]  hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] "
                key={offer.id}
              >
                <div className="text-4xl"> {offer.icon} </div>
                <p className="text-2xl"> {offer.title} </p>
                <p className="text-gray-500"> {offer.desc} </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
