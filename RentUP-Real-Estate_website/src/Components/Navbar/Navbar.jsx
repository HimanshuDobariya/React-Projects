import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { navItems } from "../../data/Data";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { RxExit } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="container">
      <nav className="flex">
        <img src={Logo} alt="logo" />
        <ul className={`${showMenu ? "navlinks show-menu" : "navlinks"}`}>
          {navItems.map(({ text, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                {" "}
                {text}{" "}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="right-nav flex">
          <h4>
            <span>0</span>
            My List
          </h4>
          <button className="flex">
            <RxExit />
            Sign In
          </button>
        </div>
        <button
          className="toggle-menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {showMenu ? <IoMdClose /> : <IoMenuSharp />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
