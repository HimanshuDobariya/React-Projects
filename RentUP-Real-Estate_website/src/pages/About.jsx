import React from "react";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import aboutImg from "../assets/about.jpg";
import immoio from "../assets/immio.jpg";
import "./about.css";
import Question from "../Components/Questions/Question";

const About = () => {
  return (
    <>
      <SectionTitle
        img={aboutImg}
        title="About Us - Who We Are?"
        subTitle="About Us"
      />

      <section className="about">
        <div className="container flex">
          <div className="about-content">
            <div className="about-heading">
              <h1> Our Agency Story</h1>
              <p>Check out our company story and work process</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button>More About Us</button>
          </div>

          <div className="image">
            <img src={immoio} alt="" />
          </div>
        </div>
      </section>

      <Question />
    </>
  );
};

export default About;
