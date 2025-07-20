"use client"
import React, { useState } from "react";
import PricingCard from "./PricingCard";

const features = [
  "20 Trainings",
  "Free shower & lockers",
  "Reliable & Experienced Team",
  "Free parking",
  "5 Days Per Week",
  "Nutrition Program",
];

const monthlyPlans = [
  {
    plan: "Basic Plan",
    price: 150,
    availableFeatures: [
      "20 Trainings",
      "Free shower & lockers",
      "Reliable & Experienced Team",
      "Free parking",
    ],
  },
  {
    plan: "Standard Plan",
    price: 200,
    availableFeatures: [
      "20 Trainings",
      "Free shower & lockers",
      "Reliable & Experienced Team",
      "Free parking",
      "5 Days Per Week",
    ],
  },
  {
    plan: "Premium Plan",
    price: 250,
    availableFeatures: features,
  },
];

const yearlyPlans = [
  {
    plan: "Basic Plan",
    price: 1200,
    availableFeatures: [
      "20 Trainings",
      "Free shower & lockers",
      "Reliable & Experienced Team",
    ],
  },
  {
    plan: "Standard Plan",
    price: 1800,
    availableFeatures: [
      "20 Trainings",
      "Free shower & lockers",
      "Reliable & Experienced Team",
      "5 Days Per Week",
    ],
  },
  {
    plan: "Premium Plan",
    price: 2400,
    availableFeatures: features,
  },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const plans = activeTab === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Find Your Perfect Plan</h2>
        <div className="inline-flex border rounded overflow-hidden mt-4">
          <button
            onClick={() => setActiveTab("monthly")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "monthly"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            MONTHLY
          </button>
          <button
            onClick={() => setActiveTab("yearly")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "yearly"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            YEARLY
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={features}
            availableFeatures={plan.availableFeatures}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
