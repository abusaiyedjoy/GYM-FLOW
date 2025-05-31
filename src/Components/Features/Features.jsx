import React from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaDumbbell,
  FaChartLine,
  FaCreditCard,
  FaMobileAlt,
} from "react-icons/fa";
import FeatureCard from "./FeaturesCard";

const features = [
  {
    title: "Member Management",
    description:
      "Easily track members, manage profiles, and handle membership plans with our intuitive interface.",
    icon: <FaUsers />,
  },
  {
    title: "Class Scheduling",
    description:
      "Create and manage class schedules, allow online bookings, and send automatic reminders.",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Equipment Tracking",
    description:
      "Monitor equipment usage, maintenance schedules, and repairs to ensure everything runs smoothly.",
    icon: <FaDumbbell />,
  },
  {
    title: "Business Analytics",
    description:
      "Gain insights with comprehensive reports on attendance, revenue, and member engagement.",
    icon: <FaChartLine />,
  },
  {
    title: "Payment Processing",
    description:
      "Secure and automated billing system with multiple payment options and invoice management.",
    icon: <FaCreditCard />,
  },
  {
    title: "Mobile Access",
    description:
      "Access your gym management system anywhere, anytime with our responsive mobile interface.",
    icon: <FaMobileAlt />,
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-gray-600">
          Everything you need to efficiently manage your fitness center in one
          integrated platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
