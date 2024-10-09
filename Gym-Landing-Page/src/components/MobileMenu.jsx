import React from "react";
import { navLinks } from "../data/Data";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 h-screen w-full lg:hidden z-10 bg-white"
        >
          <ul className="text-xl font-semibold uppercase bg-primary py-10 m-6 rounded-3xl text-white flex flex-col justify-center items-center gap-10">
            {navLinks.map((navlink) => {
              return (
                <li key={navlink.id}>
                  <a href={navlink.path}></a> {navlink.title}{" "}
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
