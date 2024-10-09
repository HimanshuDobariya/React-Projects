import React from "react";
import "./contact.css";
import Img from "../assets/home-image.png";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email.."
            />
            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
