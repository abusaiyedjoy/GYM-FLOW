"use client"
import { products } from "@/Components/Resource";
import Header from "@/Components/ui/Header";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const metadata = {
  title: "GYM-FLOW | Shop",
  description: "Explore our shop for the best fitness gear and accessories at GYM-FLOW.",
};

const Shop = () => {

  const path = usePathname();



  return (
    <>
      <Header Title={"Shoping for yourself"} Path={path}></Header>
      <div className="my-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <div
            key={product.id}
            className="max-w-sm mx-auto bg-white border border-gray-200 p-5 rounded-2xl shadow-lg"
          >
            <Link href={`/shop/${product.id}`}>
              <Image
                className="w-full h-[250px] object-cover rounded-2xl bg-[#F8F8F8] border border-gray-300"
                src={product.imageUrl}
                alt={product.name}
                width={1080}
                height={1920}
              />
            </Link>
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
