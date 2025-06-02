"use client";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from "./ui/Title";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Code T-Shirt",
    price: 19.99,
    vat: 12,
    rating: 4.5,
    stock: true,
    description: "A stylish and comfortable t-shirt for coding enthusiasts.",
    sizes: ["S", "M", "L"],
    colors: ["#000000", "#FFFFFF", "#808080", "#0047AB", "#008000"],
    brand: "Shirt Flex",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
    gallery: [
      "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
      "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
      "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
    ],
  },
  {
    id: 2,
    name: "White Code T-Shirt",
    price: 21.99,
    vat: 12,
    rating: 4.8,
    stock: true,
    description: "Premium quality white t-shirt with a sleek coding design.",
    sizes: ["S", "M", "L"],
    colors: ["#FFFFFF", "#000000", "#CCCCCC", "#808080", "#0047AB"],
    brand: "Shirt Flex",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/GnT0zQT/code-t-shirt-white-png.webp",
    gallery: [
      "https://i.ibb.co/GnT0zQT/code-t-shirt-white-png.webp",
      "https://i.ibb.co/GnT0zQT/code-t-shirt-white-png.webp",
      "https://i.ibb.co/GnT0zQT/code-t-shirt-white-png.webp",
    ],
  },
  {
    id: 3,
    name: "Graphic Tee G1",
    price: 16.99,
    vat: 12,
    rating: 4.4,
    stock: true,
    description: "Vibrant graphic tee for a casual look.",
    sizes: ["S", "M", "L"],
    colors: ["#FF0000", "#0000FF", "#008000", "#FFD700", "#8A2BE2"],
    brand: "Graphic Tee Co.",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/2vH5pnD/g-1.png",
    gallery: [
      "https://i.ibb.co/2vH5pnD/g-1.png",
      "https://i.ibb.co/2vH5pnD/g-1.png",
      "https://i.ibb.co/2vH5pnD/g-1.png",
    ],
  },
  {
    id: 4,
    name: "Graphic Tee G2",
    price: 17.99,
    vat: 12,
    rating: 4.3,
    stock: true,
    description: "Trendy graphic t-shirt perfect for everyday wear.",
    sizes: ["M", "L"],
    colors: ["#000000", "#FFFFFF", "#808080", "#0047AB", "#008000"],
    brand: "Graphic Tee Co.",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/wWXvPsZ/g-2.png",
    gallery: [
      "https://i.ibb.co/wWXvPsZ/g-2.png",
      "https://i.ibb.co/wWXvPsZ/g-2.png",
      "https://i.ibb.co/wWXvPsZ/g-2.png",
    ],
  },
  {
    id: 5,
    name: "Graphic Tee G5",
    price: 15.99,
    vat: 12,
    rating: 4.2,
    stock: true,
    description: "Casual graphic tee with a bold design.",
    sizes: ["S", "M", "L"],
    colors: ["#FF5733", "#33FF57", "#5733FF", "#FFFF57", "#57FFFF"],
    brand: "Graphic Tee Co.",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/4MvLJzt/g-5.png",
    gallery: [
      "https://i.ibb.co/4MvLJzt/g-5.png",
      "https://i.ibb.co/4MvLJzt/g-5.png",
      "https://i.ibb.co/4MvLJzt/g-5.png",
    ],
  },
  {
    id: 6,
    name: "Gym Wear G7",
    price: 24.99,
    vat: 12,
    rating: 4.7,
    stock: true,
    description: "High-quality gym wear for intense workouts.",
    sizes: ["S", "M", "L"],
    colors: ["#000000", "#FFFFFF", "#A52A2A", "#FF4500", "#2E8B57"],
    brand: "Gym Flex",
    category: "Gym",
    imageUrl: "https://i.ibb.co/SydNYxr/g-7.png",
    gallery: [
      "https://i.ibb.co/SydNYxr/g-7.png",
      "https://i.ibb.co/SydNYxr/g-7.png",
      "https://i.ibb.co/SydNYxr/g-7.png",
    ],
  },
  {
    id: 7,
    name: "Gym Wear G8",
    price: 26.99,
    vat: 12,
    rating: 4.6,
    stock: true,
    description: "Breathable and durable gym attire.",
    sizes: ["S", "M", "L"],
    colors: ["#B22222", "#FFD700", "#008080", "#DAA520", "#9400D3"],
    brand: "Gym Flex",
    category: "Gym",
    imageUrl: "https://i.ibb.co/4N32Wfv/g-8.png",
    gallery: [
      "https://i.ibb.co/4N32Wfv/g-8.png",
      "https://i.ibb.co/4N32Wfv/g-8.png",
      "https://i.ibb.co/4N32Wfv/g-8.png",
    ],
  },
  {
    id: 8,
    name: "Gym Tank Top",
    price: 22.99,
    vat: 12,
    rating: 4.5,
    stock: true,
    description: "Comfortable tank top designed for gym sessions.",
    sizes: ["M", "L"],
    colors: ["#4682B4", "#FF6347", "#6A5ACD", "#5F9EA0", "#FFA07A"],
    brand: "Gym Flex",
    category: "Gym",
    imageUrl: "https://i.ibb.co/zSfzrfy/Gym-shop-image-14-768x952.jpg",
    gallery: [
      "https://i.ibb.co/zSfzrfy/Gym-shop-image-14-768x952.jpg",
      "https://i.ibb.co/zSfzrfy/Gym-shop-image-14-768x952.jpg",
      "https://i.ibb.co/zSfzrfy/Gym-shop-image-14-768x952.jpg",
    ],
  },
  {
    id: 9,
    name: "Gym Shorts",
    price: 18.99,
    vat: 12,
    rating: 4.3,
    stock: true,
    description: "Lightweight gym shorts for maximum comfort.",
    sizes: ["S", "M", "L"],
    colors: ["#000000", "#FFD700", "#8B0000", "#00CED1", "#FF7F50"],
    brand: "Gym Flex",
    category: "Gym",
    imageUrl: "https://i.ibb.co/JdrXKwH/Gym-shop-img-3.png",
    gallery: [
      "https://i.ibb.co/JdrXKwH/Gym-shop-img-3.png",
      "https://i.ibb.co/JdrXKwH/Gym-shop-img-3.png",
      "https://i.ibb.co/JdrXKwH/Gym-shop-img-3.png",
    ],
  },
  {
    id: 10,
    name: "JavaScript Developer",
    price: 20.99,
    vat: 12,
    rating: 4.9,
    stock: true,
    description: "Cool t-shirt for JavaScript developers.",
    sizes: ["S", "M", "L"],
    colors: ["#F0DB4F", "#000000", "#FFFFFF", "#808080", "#0047AB"],
    brand: "Dev Shirts",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/tqpZNmm/js-developer-png.webp",
    gallery: [
      "https://i.ibb.co/tqpZNmm/js-developer-png.webp",
      "https://i.ibb.co/tqpZNmm/js-developer-png.webp",
      "https://i.ibb.co/tqpZNmm/js-developer-png.webp",
    ],
  },
];

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
          {products.map((product) => (
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
