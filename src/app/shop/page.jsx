import Image from "next/image";
import Link from "next/link";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Code T-Shirt",
      category: "T-Shirt",
      price: 19.99,
      description: "A stylish and comfortable t-shirt for coding enthusiasts.",
      // imageUrl: "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
      rating: 4.5,
      stock: 25,
    },
  ];

  return (
    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full max-w-sm bg-white border border-gray-200 p-5 rounded-2xl shadow-lg"
        >
            <Image
              className="w-full h-[250px] object-cover rounded-2xl bg-[#F8F8F8] border border-gray-300"
              src="https://i.ibb.co/Bw621f8/code-t-shirt-png.webp"
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
  );
};

export default Shop;
