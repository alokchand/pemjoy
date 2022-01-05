import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Features from "./Features/Features";

export default function Home({ customer }) {
  // console.log(customer);
  return (
    <>
      {/* ------------------------------------------------------NAV BAR--------------------------------------------------------------- */}
      <Navbar />
      {/* ------------------------------------------------------PICTURE--------------------------------------------------------------- */}

      <Features />
      <br />
      <br />
      {/* ------------------------------------------------------SERVICES--------------------------------------------------------------- */}

      <div
        className="badge bg-primary text-wrap"
        style={{ width: "95rem", height: "4rem" }}
      >
        <h1>Services</h1>
      </div>
      <Services customerDetails={customer} />
      {/* ------------------------------------------------------ABOUT US--------------------------------------------------------------- */}
      <br />
      <br />
      <div
        className="badge bg-primary text-wrap"
        style={{ width: "95rem", height: "4rem" }}
      >
        <h1>AboutUs</h1>
      </div>
      <AboutUs />
      {/* ------------------------------------------------------FOOTER --------------------------------------------------------------- */}

      <Footer />
    </>
  );
}
