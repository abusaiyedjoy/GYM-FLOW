"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Banner = () => {
  const slides = [
    {
      title: "Welcome to GymFlow",
      description: "Your ultimate destination for fitness and health.",
      buttonText: "Calculate BMI",
      path: "/bmi"
    },
    {
      title: "Unleash Your Potential",
      description: "Achieve your fitness goals with personalized plans.",
      buttonText: "Start Today",
      path: "/register"
    },
    {
      title: "Stronger Every Day",
      description: "Experience the best training programs and facilities.",
      buttonText: "Our Shedule",
      path: "/schedule"
    },
    {
      title: "Transform Your Life",
      description: "Take the first step towards a healthier lifestyle.",
      buttonText: "Sign Up",
      path: "/register"
    },
    {
      title: "MAKE YOUR BODY HEALTHY & FIT",
      description: "Gymhen an unknown printer took a galley of type and scrambled.It has survived nknown printercenturies.",
      buttonText: "Contact Us",
      path: "/contact"
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
          <div className="relative text-start place-content-start text-white">
            <h1 className="text-3xl md:text-4xl lg:max-w-[600px] uppercase font-extrabold">{slide.title}</h1>
            <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
            <button className="button mt-4">
              <Link href={slide.path} >{slide.buttonText}</Link>
            </button>
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
