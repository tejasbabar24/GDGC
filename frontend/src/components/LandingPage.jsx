import React from "react";
import bg from "../assets/landingBg.png";
import logo from "../assets/image 1.png";
 // <-- Add your GDSC logo in assets

function LandingPage() {
  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-center justify-center text-center bg-opacity-50 "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Logo */}
        <img src={logo} alt="GDSC Logo" className="" />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Google Developer Student Club
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 font-medium text-base md:text-lg">
          D. Y. Patil College of Engineering
        </p>

        {/* Button */}
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow-md transition">
          Join Community
        </button>
      </div>
    </section>
  );
}

export default LandingPage;
