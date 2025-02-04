"use client";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Premium Gym Membership",
      price: 50,
      quantity: 1,
      image: "https://i.ibb.co/GnT0zQT/code-t-shirt-white-png.webp",
    },
    {
      id: 2,
      name: "Protein Supplement",
      price: 30,
      quantity: 1,
      image: "https://i.ibb.co/SydNYxr/g-7.png",
    },
  ]);

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6 pt-28">
      <h1 className="text-xl font-bold text-start text-gray-600 bg-gray-300 rounded-md w-full px-4 py-2 mb-6">Continue Shopping</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-800">Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-400">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-4 text-gray-800">Image</th>
                  <th className="border p-4 text-gray-800">Product</th>
                  <th className="border p-4 text-gray-800">Unit Price</th>
                  <th className="border p-4 text-gray-800">Quantity</th>
                  <th className="border p-4 text-gray-800">Total</th>
                  <th className="border p-4 text-gray-800">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="border p-4 text-gray-800">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    </td>
                    <td className="border p-4 text-gray-800">{item.name}</td>
                    <td className="border p-4 text-gray-800">${item.price}</td>
                    <td className="border p-4 text-gray-800">
                      <div className="flex justify-center items-center space-x-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-gray-300 text-gray-800 px-3 py-1 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-gray-300 text-gray-800 px-3 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="border p-4 text-gray-800">${item.price * item.quantity}</td>
                    <td className="border p-4 text-gray-800">
                      <button onClick={() => removeItem(item.id)} className="text-primary">
                        <FaTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="mt-6 flex justify-end text-gray-900">
            <div className="border p-6 w-80 bg-gray-200 rounded-md">
              <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
              <div className="flex justify-between text-lg">
                <span>Subtotal:</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-2">
                <span>Total:</span>
                <span>${totalPrice}</span>
              </div>
              <button className="button w-full my-2">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
