import React from "react";
import { pricings } from "../../data/Data";
import "./pricing.css";

const Price = () => {
  return (
    <section className="pricing">
      <div className="container">
        <h1 className="heading">Select Your Package</h1>
        <p className="sub-heading">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        </p>
        <div className="pricing-card grid3">
          {pricings.map(
            ({ title, price, perUserTime, details, btnText }, index) => (
              <div className="card" key={index}>
                <h3>{title}</h3>
                <h1>
                  <span>$</span> {price}
                </h1>
                <p>{perUserTime}</p>

                <div className="pricing-quality">
                  {details.map((detail, index) => (
                    <li key={index}>
                      <span>{detail[0]}</span>
                      <p>{detail[1]}</p>
                    </li>
                  ))}
                </div>
                <button>{btnText}</button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Price;
