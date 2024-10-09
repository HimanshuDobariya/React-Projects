import React, { useState } from "react";
import { navLinks } from "../data/Data";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="container flex items-center justify-between py-6">
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <FaDumbbell />
          <p>Coders</p>
          <p className="text-secondary">Gym</p>
        </div>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 ">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <a
                    href={navLink.path}
                    className="inline-block px-3 py-1 font-semibold hover:text-primary "
                  >
                    {navLink.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-2xl p-2 rounded-full hover:bg-primary hover:text-white duration-200">
            <CiSearch />
          </button>
          <button className="text-2xl p-2 rounded-full hover:bg-primary hover:text-white duration-200">
            <PiShoppingCartLight />
          </button>
          <button className="text-primary px-6 py-2 rounded-md border-2 font-semibold border-primary hover:text-white hover:bg-primary duration-200 hidden lg:block">
            Login
          </button>
        </div>

        <div
          className="lg:hidden cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <MdClose className="text-4xl" />
          ) : (
            <MdMenu className="text-4xl" />
          )}
        </div>

        <MobileMenu open={open} />
      </div>
    </nav>
  );
};

export default Navbar;
