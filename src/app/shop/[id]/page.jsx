"use client"
import Header from "@/Components/ui/Header";
import ReviewsSection from "@/Components/ui/Review";
import { usePathname } from "next/navigation";
import React, { useState } from "react";


 const metadata = {
  title: "GYM-FLOW | Product Details",
  description: "Discover details about our premium fitness products at GYM-FLOW.",
};

const ProductDetails = ({ params }) => {
  const path = usePathname();

  const products = [
    {
      id: 1,
      name: "Code T-Shirt",
      price: 19.99,
      vat: 12,
      rating: 4.5,
      stock: true,
      description: "A stylish and comfortable t-shirt for coding enthusiasts.",
      sizes: ["Small", "Medium", "Large"],
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
      sizes: ["Small", "Medium", "Large"],
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
      sizes: ["Small", "Medium", "Large"],
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
      sizes: ["Small", "Medium", "Large"],
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
      sizes: ["Small", "Medium", "Large"],
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
      sizes: ["Small", "Medium", "Large"],
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
      sizes: ["Small", "Medium", "Large"],
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
      sizes: ["Small", "Medium", "Large"],
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
      sizes: ["Small", "Medium", "Large"],
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
      name: "JavaScript Developer T-Shirt",
      price: 20.99,
      vat: 12,
      rating: 4.9,
      stock: true,
      description: "Cool t-shirt for JavaScript developers.",
      sizes: ["Small", "Medium", "Large"],
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


  const product = products.find((p) => p.id === Number(params.id)) || products[0];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <>
      <Header Title={"Products Details"} Path={path}></Header>
      <div className="min-h-screen container mx-auto bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Product Image and Gallery */}
          <div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="flex space-x-4 mt-4">
              {product.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-20 h-20 rounded-lg object-cover cursor-pointer border border-gray-200"
                  onClick={() => console.log("Change Main Image!")}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <div className="flex items-center mt-2 space-x-2">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span className="text-gray-700 font-medium">{product.rating} Rating</span>
              <span
                className={`${product.stock ? "text-green-600" : "text-red-600"
                  } text-sm font-semibold`}
              >
                {product.stock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <p className="text-xl font-bold text-gray-800 mt-4">
              ${product.price.toFixed(2)}{" "}
              <span className="text-sm text-gray-500">+{product.vat}% VAT Added</span>
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mt-4 space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <h3 className="text-gray-700 font-semibold">Select Size</h3>
              <div className="flex space-x-4 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-lg border ${selectedSize === size
                        ? "bg-[#d10101] text-white"
                        : "bg-gray-100 text-gray-800"
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mt-6">
              <h3 className="text-gray-700 font-semibold">Select Color</h3>
              <div className="flex space-x-4 mt-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full cursor-pointer border-2 ${selectedColor === color ? "border-red-700" : "border-gray-300"
                      }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-[#d10101] hover:bg-[#b90101] text-white text-sm font-semibold py-3 rounded-lg shadow mt-6 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ReviewsSection></ReviewsSection>
    </>
  );
};

export default ProductDetails;
