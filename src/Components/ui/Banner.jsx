"use client"
import { useEffect, useState } from "react";

const Banner = () => {
  const slides = [
    {
      title: "Welcome to GymFlow",
      description: "Your ultimate destination for fitness and health.",
      buttonText: "Join Now",
    },
    {
      title: "Unleash Your Potential",
      description: "Achieve your fitness goals with personalized plans.",
      buttonText: "Start Today",
    },
    {
      title: "Stronger Every Day",
      description: "Experience the best training programs and facilities.",
      buttonText: "Get Started",
    },
    {
      title: "Transform Your Life",
      description: "Take the first step towards a healthier lifestyle.",
      buttonText: "Sign Up",
    },
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
          <div className="relative text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">{slide.title}</h1>
            <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
            <button className="button mt-4">{slide.buttonText}</button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === 0 ? slides.length - 1 : prevSlide - 1
            )
          }
          className="btn btn-circle"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          className="btn btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
