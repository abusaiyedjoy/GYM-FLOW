"use client";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';


const products = [
  {
    name: "Gym Nike Sneaker",
    price: "$80.00",
    rating: 5,
    image: "/images/shoe.png",
  },
  {
    name: "Gym Equipment",
    price: "$80.00",
    rating: 3,
    image: "/images/ball.png",
  },
  {
    name: "Working Dumble",
    price: "$60.00",
    rating: 5,
    image: "/images/kettlebell.png",
  },
];

export default function GymStoreSlider() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white text-center">
      <div className="mb-10">
        <p className="text-sm uppercase font-bold text-white inline-block bg-red-500 px-4 py-1 rounded-full mb-2">
          Shop Online
        </p>
        <h2 className="text-3xl font-bold mb-2">Our Online Gym Store</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Gymat an unknown printer took a galley of type and scray aretea bled make a type specimen book. May has survived...
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-semibold">{item.name}</h3>
              <div className="text-yellow-500 text-sm mb-1">
                {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
              </div>
              <p className="text-red-500 font-bold text-lg">{item.price}</p>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center gap-2">
                <span>🛒</span> Add to cart
              </button>
            </div>
          </SwiperSlide>
        ))}

        {/* All Products button slide */}
        <SwiperSlide>
          <div className="bg-gray-100 flex items-center justify-center h-full p-6 rounded-lg shadow-md">
            <a
              href="/products"
              className="text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold"
            >
              View All Products →
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
