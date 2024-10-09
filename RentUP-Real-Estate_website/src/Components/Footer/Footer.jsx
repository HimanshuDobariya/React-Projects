import React from "react";
import LogoghtLight from "../../assets/logo-light.png";
import "./footer.css";
import { footerLinks } from "../../data/Data";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="container">
          <div className="footer-details">
            <img src={LogoghtLight} alt="" />
            <h2>Do You Need Help With Anything?</h2>
            <p>
              Receive updates, hot deals, tutorials, discounts sent straignt in
              your inbox every month
            </p>

            <div className="form-group">
              <input type="email" placeholder="Enter your Email" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="footer-links grid3">
            {footerLinks.map(({ title, links }, index) => (
              <div className="links" key={index}>
                <h3>{title}</h3>
                {links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </div>
            ))}
          </div>
        </section>
      </footer>
      <section className="legal">
        <p>© 2024 RentUP. Designd By Himanshu Dobariya.</p>
      </section>
    </>
  );
};

export default Footer;
