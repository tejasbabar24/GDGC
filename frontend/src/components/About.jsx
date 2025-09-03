import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";
import AboutCaard from "./AboutCaard";

function About() {

   const cardData = [
  {
    title: "Concept of GDSC",
    description:
      "GDSC provides a space for students to explore diverse tech fields, focusing on skill development and networking, ideal for tech enthusiasts and aspiring developers.",
    color: "#BBF7D0", // green-200
    textColor: "#047857", // green-700
  },
  {
    title: "Target Audience",
    description:
      "GDSC is tailored for tech-savvy university students seeking to improve coding skills, collaborate on projects, and gain real-world tech experience.",
    color: "#FECACA", // red-200
    textColor: "#B91C1C", // red-700
  },
  {
    title: "Why GDSC ?",
    description:
      "GDSC is a smart choice for students to focus on practical tech skill development through real-world projects and networking for professional growth.",
    color: "#BFDBFE", // blue-200
    textColor: "#1D4ED8", // blue-700
  },
  {
    title: "Other Concept",
    description:
      "GDSC fosters community and student leadership, inspiring collaboration on tech events and initiatives. It's a hub for growth, learning, and connections.",
    color: "#FDE68A", // yellow-200
    textColor: "#92400E", // yellow-700
  },
];


  return (
    <section className="px-6 md:px-20 py-12 flex flex-col lg:flex-row gap-12">
      <div>
        {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-4 text-start">
        What is GDSC ? <span role="img" aria-label="thinking">🤔</span>
      </h2>

      {/* Description */}
      <p className="text-center max-w-3xl mx-auto text-gray-700 mb-2 text-justify ">
        Google Developer Student Clubs is a student-led program supported by Google. 
        It's a dynamic platform for students to learn, collaborate on web and 
        mobile development, machine learning, and more.
      </p>
      <p className="text-center max-w-3xl mx-auto text-gray-500 mb-6 text-justify">
        GDSC fosters skill-building, networking, and grants access to Google's 
        resources and expertise, making it an invaluable opportunity for tech enthusiasts.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl mb-12">
        <a href="#" className="text-pink-500 hover:scale-110"><FaInstagram /></a>
        <a href="#" className="text-blue-700 hover:scale-110"><FaLinkedin /></a>
        <a href="#" className="text-gray-800 hover:scale-110"><FaGithub /></a>
        <a href="#" className="text-indigo-500 hover:scale-110"><FaDiscord /></a>
        <a href="#" className="text-red-600 hover:scale-110"><FaYoutube /></a>
        <a href="#" className="text-sky-500 hover:scale-110"><FaTwitter /></a>
      </div>
      </div>

      <div>
        {/* Info Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cardData.map((card, index) => (
        <AboutCaard
          key={index}
          title={card.title}
          description={card.description}
          color={card.color}
          textColor={card.textColor}
        />
      ))}
      </div>
      </div>
    </section>
  );
}

export default About;
