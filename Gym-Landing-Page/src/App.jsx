import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BgImg from "./assets/bg-image.png";
import Offers from "./components/Offers";
import Banner from "./components/Banner";
import { banner1Data, banner2Data } from "./data/Data";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Poster from "./components/Poster";

const bgStyle = {
  backgroundImage: `url(${BgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const App = () => {
  return (
    <div className="overflow-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>

      <Offers />
      <Banner data={banner1Data} />
      <Products />
      <Banner data={banner2Data} />
      <Testimonials />
      <Poster />
      <Footer />
    </div>
  );
};

export default App;
