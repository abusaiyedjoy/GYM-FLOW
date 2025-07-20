"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { slides } from "./Resource";

const Banner = () => {


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
      {slides?.map((slide, index) => (
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
