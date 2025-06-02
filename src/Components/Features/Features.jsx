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
import Title from "../ui/Title";
import { FaCalculator } from "react-icons/fa6";

const features = [
  {
    title: "Member Management",
    description:
      "Easily track members, manage profiles, and handle membership plans with our intuitive interface.",
    icon: <FaUsers size={24} />,
  },
  {
    title: "Class Scheduling",
    description:
      "Create and manage class schedules, allow online bookings, and send automatic reminders.",
    icon: <FaCalendarAlt size={24} />,
  },
  {
    title: "Equipment Tracking",
    description:
      "Monitor equipment usage, maintenance schedules, and repairs to ensure everything runs smoothly.",
    icon: <FaDumbbell size={24} />,
  },
  {
    title: "BMI Calculator",
    description:
      "Enter your weight and height to calculate your BMI and get personalized health insights.",
    icon: <FaCalculator size={24} />,
  },
  {
    title: "Payment Processing",
    description:
      "Secure and automated billing system with multiple payment options and invoice management.",
    icon: <FaCreditCard size={24} />,
  },
  {
    title: "Mobile Access",
    description:
      "Access your gym management system anywhere, anytime with our responsive mobile interface.",
    icon: <FaMobileAlt size={24} />,
  },
];

const Features = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-[#F9FAFB] z-50">
      <Title title={"Our Features"} description={"Discover what makes GymFlow the perfect fitness partner for you"} />
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
