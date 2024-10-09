import React from "react";
import { properties } from "../../data/Data";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './properties.css'
const Properies = () => {
  return (
    <>
<section className="properties">
        <div className="container">
          <h1 className="heading">Recent Property Listed</h1>
          <p className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <div className="cards grid3">
            {properties.map(
              (
                { imgSrc, labelFor, propertyName, location, price, type },
                index
              ) => (
                <div className="card" key={index}>
                  <img src={imgSrc} alt="" />
                  <div className="info">
                    <div className="flex">
                      <span>{labelFor}</span>
                      <FaHeart className="heart-icon" />
                    </div>
                    <h4>{propertyName}</h4>
                    <p>
                      <FaLocationDot />
                      {location}{" "}
                    </p>
                  </div>

                  <div className="flex btn-box">
                    <button>{price} /sqft</button>
                    {type}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Properies;
