import React from "react";
import FeatureCard from "./FeaturesCard";
import Title from "../ui/Title";
import { features } from "../Resource";



const Features = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-[#F9FAFB] z-50">
      <Title title={"Our Features"} description={"Discover what makes GymFlow the perfect fitness partner for you"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features?.map((feature, index) => (
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
