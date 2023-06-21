// import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/Sections/About";
import Hero from "../components/Sections/Hero";
import Product from "../components/Sections/Product";

const Home = () => {
  return (
    <div className="bg-white w-screen min-h-screen">
      {/* <div className="text-blue">TES</div> */}
      <Navbar />
      <div>
        <Hero />
        <div id="about" className="bg-[#ff4800]">
          <About />
        </div>
        <div id="product" className=" w-[90vw] flex justify-center mx-auto">
          <Product />
        </div>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
