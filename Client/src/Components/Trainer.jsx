"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 

import "swiper/css";
import "swiper/css/navigation";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPlus } from "react-icons/fa";
import { trainers } from "./Resource";
import Title from "./ui/Title";

export default function TrainerSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="text-center mb-12">
        <p className="text-sm uppercase font-bold text-primary inline-block px-4 py-1 rounded-full">
          Our Trainer
        </p>
        <Title className="!mt-0" title={"Meet Our Skilled Trainer"} />
      </div>

      <div className=" flex justify-center items-center gap-6 px-4 md:px-20 overflow-x-auto no-scrollbar">
        {/* ✅ Custom Navigation Buttons in Bottom Center */}
        <div className="absolute bottom-0 right-1/2 z-10 flex gap-8 mb-12">
          <button className="swiper-button-prev !rounded-full !px-2 button">
            ❮
          </button>
          <button className="swiper-button-next mx-8 !rounded-full !px-2 button">
            ❯
          </button>
        </div>

        {/* Trainers */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >

          {trainers?.map((trainer, i) => (
            <SwiperSlide key={i} >
              <div className="flex flex-col items-center text-center relative group">
                <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full border-4 border-white shadow-xl overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {trainer.socials.length > 0 ? (
                      <>
                        <a href="#" className="bg-white text-red-500 p-2 rounded-full">
                          <FaFacebookF />
                        </a>
                        <a href="#" className="bg-white text-red-500 p-2 rounded-full">
                          <FaTwitter />
                        </a>
                        <a href="#" className="bg-white text-red-500 p-2 rounded-full">
                          <FaLinkedinIn />
                        </a>
                      </>
                    ) : (
                      <div className="bg-red-600 text-white p-3 rounded-full">
                        <FaPlus />
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="mt-4 font-bold text-lg text-gray-800">{trainer.name}</h3>
                <p className="text-red-500 text-sm">{trainer.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
