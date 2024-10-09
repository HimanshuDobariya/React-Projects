import React from "react";
import Properies from "../Components/Properties/Properies";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import PropertyImg from "../assets/about.jpg";
import Question from "../Components/Questions/Question";

const Property = () => {
  return (
    <>
      <SectionTitle
        img={PropertyImg}
        title="Properties - Our Latest Properties"
        subTitle="Properties"
      />
      <Properies />
      <Question />
    </>
  );
};

export default Property;
