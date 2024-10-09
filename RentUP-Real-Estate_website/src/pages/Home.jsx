import React from "react";
import "./home.css";
import Form from "../Components/Form/Form";
import Features from "../Components/Features/Features";
import Properies from "../Components/Properties/Properies";
import { locations } from "../data/Data";
import { achievement } from "../data/Data";
import { agents } from "../data/Data";

import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Question from "../Components/Questions/Question";
import Price from "../Components/Pricing/Price";

const Home = () => {
  return (
    <>
      <section className="home flex">
        <div className="container">
          <h1>Search Your Next Home</h1>
          <p>Find new & featured property located in your local city.</p>
          <Form />
        </div>
      </section>
      <Features />
      <Properies />

      <section className="awarad">
        <div className="container">
          <p className="title">Our Awards</p>
          <h1>
            Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services
          </h1>

          <div className="grid4 achievement">
            {achievement.map(({ icon, number, text }, index) => (
              <div key={index} className="box">
                <span>{icon}</span>
                <h1>{number}</h1>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="locations">
        <div className="container">
          <h1 className="heading">Explore By Location</h1>
          <p className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <div className="grid3 city-details">
            {locations.map(({ imgSrc, city, detail }, index) => (
              <div className="card" key={index}>
                <img src={imgSrc} alt="" />

                <div className="city-details-content">
                  <h4>{city}</h4>
                  <div className="flex">
                    <span>{detail.villas}</span>
                    <span>{detail.offices}</span>
                    <span>{detail.apartments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agents">
        <div
          className="container
        "
        >
          <h1 className="heading">Our Featured Agents</h1>
          <p className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>




          <div className="grid3 agent-data">
            {agents.map(({ listing, imgSrc, location, name }, index) => (
              <div className="card" key={index}>
                <button className="listing">{listing} Listing</button>
                <div className="img">
                  <img src={imgSrc} alt="" />
                </div>
                <p><FaLocationDot /> {location}</p>
                <h4>{name}</h4>
                <div className="icons">
                  <li><FaFacebookF /></li>
                  <li><FaLinkedin /></li>
                  <li><FaTwitter /></li>
                  <li><FaInstagram /></li>
                </div>
                <div className="btns">
                  <button><FaMessage /> Message</button>
                  <button><IoCall /></button>
                </div>
              </div>
            ))}
          </div>






















        </div>
      </section>
      <Price />
      <Question />
    </>
  );
};

export default Home;
