import React from "react";

function AboutCaard({ title, description, color, textColor }) {
  return (
    <div className="p-5 border rounded-lg shadow bg-white">
      {/* Title */}
      <h3
        className="inline-block px-3 py-1 rounded-md font-bold text-lg mb-3"
        style={{ backgroundColor: color, color: textColor }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-800 leading-relaxed">{description}</p>
    </div>
  );
}

export default AboutCaard;
