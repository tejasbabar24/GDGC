import React from "react";
import { ExternalLink } from "lucide-react"; // icon for external link

function DevCard({ image, title, highlight, description, buttonText, buttonLink, bgColor , set}) {
  return (
    <div
      
      className={`flex flex-col md:flex-row ${
        set ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between rounded-lg p-8 gap-6 bg-gray-100 min-h-72 px-20`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Left - Image */}
      <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center w-1/2">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Right - Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-3">
          <span className="text-green-600">{highlight}</span> {title}
        </h2>
        <p className="text-gray-700 mb-5 leading-relaxed">{description}</p>

        {/* Button */}
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          {buttonText}
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}

export default DevCard;
