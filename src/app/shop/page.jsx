"use client"
import Header from "@/Components/ui/Header";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const metadata = {
  title: "GYM-FLOW | Shop",
  description: "Explore our shop for the best fitness gear and accessories at GYM-FLOW.",
};

const Shop = () => {

  const path = usePathname();
  console.log(path);

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



  return (
    <>
      <Header Title={"Shoping for yourself"} Path={path}></Header>
      <div className="my-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-200 p-5 rounded-2xl shadow-lg"
          >
            <Image
              className="w-full h-[250px] object-cover rounded-2xl bg-[#F8F8F8] border border-gray-300"
              src={product.imageUrl}
              alt={product.name}
              width={1080}
              height={1920}
            />
            <div className="px-2 py-2">
              <Link href={`/shop/${product.id}`}>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 hover:text-orange-400">
                  {product.name}
                </h5>
              </Link>
              <div className="flex items-center mt-2.5 mb-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {product.rating}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
