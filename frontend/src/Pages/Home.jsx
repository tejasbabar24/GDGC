import React from "react";
import bg from "../assets/landingBg.png";
import logo from "../assets/image 1.png";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import Services from "./Services";
 // <-- Add your GDSC logo in assets

function Home() {
  return (
    <>
        <LandingPage/>
        <About/>
        <Services/>
    </>
  );
}

export default Home;
