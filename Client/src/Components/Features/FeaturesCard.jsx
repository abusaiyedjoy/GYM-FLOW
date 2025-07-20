import React from "react";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="relative group overflow-hidden bg-white shadow-md transition-all duration-200 cursor-pointer rounded-[30px] p-8 hover:shadow-xl hover:shadow-red-200 hover:duration-100 text-center">
      {/* Background animation */}
      <div className="absolute inset-0 bg-primary scale-0 group-hover:scale-150 transition-transform duration-[2000ms] ease-out origin-center z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-primary group-hover:bg-white text-white duration-[1500ms] ease-out group-hover:text-primary flex items-center justify-center mb-6 shadow-lg">{icon}</div>
        <h3 className="text-xl font-bold group-hover:text-white transition-colors duration-[1500ms] ease-out text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-white transition-colors duration-[1500ms] ease-out">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
