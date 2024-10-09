import React from "react";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import ServicesImg from "../assets/services.jpg";
import Features from '../Components/Features/Features'
import Question from '../Components/Questions/Question'

const Services = () => {
  return (
    <>
      <SectionTitle
        img={ServicesImg}
        title="Services -All Services"
        subTitle="Services"
      />
      <Features />
      <Question />
    </>
  );
};

export default Services;
