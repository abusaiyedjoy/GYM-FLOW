import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PricingCard = ({ plan, price, features, availableFeatures }) => {
  return (
    <div className="border flex flex-col md:flex-row justify-between items-stretch">
      {/* Left side */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6">
        <h3 className="text-2xl font-bold mb-2">{plan}</h3>
        <p className="text-red-600 text-4xl font-bold mb-1">${price}</p>
        <p className="text-gray-500 text-sm">/ Month</p>
      </div>

      {/* Middle Features */}
      <div className="w-full md:w-2/3 grid grid-cols-2 gap-2 p-6 bg-gray-50 text-sm">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            {availableFeatures.includes(feature) ? (
              <FaCheckCircle className="text-red-500" />
            ) : (
              <FaTimesCircle className="text-gray-400" />
            )}
            <span
              className={
                availableFeatures.includes(feature)
                  ? "text-gray-800"
                  : "text-gray-400"
              }
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <div className="w-full md:w-[200px] flex items-center justify-center bg-gray-900 text-white text-sm font-semibold p-6">
        <button className="w-full">PURCHASE NOW</button>
      </div>
    </div>
  );
};

export default PricingCard;
