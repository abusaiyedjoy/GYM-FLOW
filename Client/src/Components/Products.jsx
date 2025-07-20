"use client";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from "./ui/Title";
import Link from "next/link";
import Image from "next/image";
import { products } from "./Resource";


export default function GymStoreSlider() {
  return (
    <section className="bg-[#F9FAFB] text-center">
      <Title title={"Our Online Gym Store"} description={"Gymat an unknown printer took a galley of type and scray aretea bled make a type specimen book. May has survived..."} />
      <div className="relative py-16 px-4 md:px-20 text-center">
        {/* ✅ Custom Navigation Buttons in Top Right */}
        <div className="absolute top-0 right-10 z-10 flex gap-14 p-4">
          <button className="swiper-button-prev !rounded-full !px-2 button">
            ❮
          </button>
          <button className="swiper-button-next mx-8 !rounded-full !px-2 button">
            ❯
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className="max-w-sm mx-auto bg-white border border-gray-200 p-5 rounded-2xl shadow-lg"
              >
                <Image
                  className="w-full h-[250px] object-cover rounded-2xl bg-[#F8F8F8] border border-gray-300"
                  src={product.imageUrl}
                  alt={product.name}
                  width={1080}
                  height={1920}
                />
                <div className="w-full px-2 py-2 text-start">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900">
                    {product.name}
                  </h5>
                  <div className="flex justify-start items-center gap-2 mt-2.5 mb-5 ">
                    <div className="text-yellow-500 text-sm mb-1">
                      {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
                    </div>
                    <span className="bg-red-100 text-primary text-xs font-semibold px-2.5 py-0.5 rounded">
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <div>
                      {product.sizes?.map((item, index) => (
                        <span key={index} className="text-lg mr-2 p-2 rounded-2xl border hover:bg-primary font-bold text-gray-900 hover:text-white">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="text-white mx-auto flex justify-center items-center mt-4 bg-primary hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-m rounded-lg text-sm px-5 py-2.5">
                    <span>🛒Add to cart</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* All Products button slide */}
          <div className="flex items-center justify-center h-full p-6 rounded-lg shadow-md">
            <Link
              href="/shop"
              className="button"
            >
              All Products →
            </Link>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
