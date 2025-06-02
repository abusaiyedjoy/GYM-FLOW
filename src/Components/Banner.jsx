"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Banner = () => {
  const slides = [
    {
      title: "Welcome to GymFlow",
      description:
        "Step into a fitness journey like no other. GymFlow combines state-of-the-art equipment with expert guidance to help you achieve a healthier, stronger body.",
      buttonText: "Calculate BMI",
      path: "/bmi"
    },
    {
      title: "Transform Your Life",
      description:
        "Unlock your strength, boost endurance, and stay committed with our personalized fitness plans, tailored to meet your individual goals.",
      buttonText: "Start Today",
      path: "/register"
    },
    {
      title: "Get Stronger Every Day",
      description:
        "Join our community of motivated individuals and transform your routine with structured workouts and professional coaching.",
      buttonText: "View Schedule",
      path: "/schedule"
    },
    {
      title: "Redefine Your Lifestyle",
      description:
        "Start your transformation today. From weight loss to muscle building, we support you at every step with expert advice and top-notch facilities.",
      buttonText: "Join Now",
      path: "/register"
    },
    {
      title: "Build a Healthy & Fit Body",
      description:
        "GymFlow is more than a gym — it’s your partner in wellness. Our programs are designed to fit all fitness levels and deliver lasting results. Let’s shape a better you.",
      buttonText: "Contact Us",
      path: "/contact"
    }
  ];


  const backgroundImage =
    "url('https://i.ibb.co.com/KhLKWfX/slide-2.jpg')";

  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel w-full h-screen relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Overlay Content */}
          <div className="relative text-center place-content-center place-items-center text-white">
            <h1 className="text-3xl md:text-4xl lg:max-w-xl uppercase font-extrabold">{slide.title}</h1>
            <p className="mt-4 px-4 text-lg md:text-xl lg:max-w-2xl">{slide.description}</p>
            <button className="button mt-4">
              <Link href={slide.path} >{slide.buttonText}</Link>
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute left-5 right-5 top-3/4 flex -translate-y-1/2 transform justify-between">
        <button
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === 0 ? slides.length - 1 : prevSlide - 1
            )
          }
          className="!rounded-full !px-2 button"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          className="!rounded-full !px-2 button"
        >
          ❯
        </button>
      </div>

    </div>
  );
};

export default Banner;
