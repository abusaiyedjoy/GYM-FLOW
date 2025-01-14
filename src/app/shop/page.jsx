const Shop =()=>{
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="w-full max-w-sm bg-white border border-gray-200 p-5 rounded-2xl shadow-lg"
            >
              <Link to={`/product/${product._id}`}>
                <img
                  className="w-full h-[250px] object-cover rounded-2xl bg-[#F8F8F8] border border-gray-300"
                  src={product.imageUrl}
                  alt={product.name}
                />
              </Link>
    
              <div className="px-2 py-2">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 hover:text-orange-400">
                    {product.name}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  {renderStars(product.rating)}
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {product.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}
export default Shop;