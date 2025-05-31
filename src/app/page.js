import Banner from "@/Components/Banner";
import Testimonial from "@/Components/Testimonial";
import Marquee from "react-fast-marquee";
import React from "react";
import Frequent from "@/Components/Frequent";
import GymStoreSlider from "@/Components/Products";
import ClassSchedule from "@/Components/Shedule";
import TrainerSection from './../Components/Trainer';
import Features from "@/Components/Features/Features";
import PricingSection from "@/Components/Pricing/PricingSection";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Features></Features>
      <GymStoreSlider></GymStoreSlider>
      <ClassSchedule></ClassSchedule>
      <Frequent></Frequent>
      <TrainerSection></TrainerSection>
      <PricingSection></PricingSection>
      <Testimonial></Testimonial>
      <Marquee className="bg-primary text-white py-3 text-2xl font-bold">
        💪 prouder every step 💪 Push your limits 💪 Exceed your expectations 💪
        Stronger every rep 💪 💪 prouder every step 💪 Push your limits 💪
        Exceed your expectations 💪 Stronger every rep
      </Marquee>
    </main>
  );
};

export default Home;
