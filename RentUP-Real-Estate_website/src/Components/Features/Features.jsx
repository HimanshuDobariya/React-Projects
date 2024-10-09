import React from "react";
import { featuresData } from "../../data/Data";
import './features.css'

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h1 className="heading">Featured Property Types</h1>
        <p className="sub-heading">Find All Type of Property.</p>

        <div className="cards grid5">
          {featuresData.map(({ imgSrc, title, subTitle }, index) => (
            <div key={index} className="card">
              <img src={imgSrc} alt="" />
              <h4>{title}</h4>
              <label>{subTitle}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
