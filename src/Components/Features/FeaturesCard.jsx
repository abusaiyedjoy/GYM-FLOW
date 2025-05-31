import React from "react";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="relative group overflow-hidden p-6 bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer">
      {/* Background animation */}
      <div className="absolute inset-0 bg-red-500 scale-0 group-hover:scale-150 transition-transform duration-[2000ms] ease-out origin-center z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="text-4xl text-red-500 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
