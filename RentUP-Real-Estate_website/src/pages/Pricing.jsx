import React from "react";
import Price from "../Components/Pricing/Price";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import PriceImg from "../assets/pricing.jpg";
import Question from '../Components/Questions/Question'

const Pricing = () => {
  return (
    <>
      <SectionTitle
        img={PriceImg}
        title="No Extra Fees. Friendly Support"
        subTitle="30 days money back guarantee"
      />
      <Price />
      <Question />
    </>
  );
};

export default Pricing;
