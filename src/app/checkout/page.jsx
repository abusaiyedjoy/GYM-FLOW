"use client";
import { useRef } from "react";
import Link from "next/link";
import { FaCreditCard, FaPaypal } from "react-icons/fa";

const Checkout = () => {
  const formRef = useRef(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center">
          Checkout
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Billing Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Billing Information
            </h2>
            <form ref={formRef} className="space-y-4 mt-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Order Summary
            </h2>
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md mt-4">
              <div className="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Gym Membership</span>
                <span>$50.00</span>
              </div>
              <div className="flex justify-between text-gray-700 dark:text-gray-300 mt-2">
                <span>Personal Training</span>
                <span>$100.00</span>
              </div>
              <hr className="my-4 border-gray-300 dark:border-gray-600" />
              <div className="flex justify-between font-bold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>$150.00</span>
              </div>
            </div>

            {/* Payment Methods */}
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6">
              Payment Method
            </h2>
            <div className="flex gap-4 mt-4">
              <button className="flex items-center gap-2 px-4 py-3 w-full bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                <FaCreditCard className="text-lg" />
                Credit Card
              </button>
              <button className="flex items-center gap-2 px-4 py-3 w-full bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
                <FaPaypal className="text-lg" />
                PayPal
              </button>
            </div>

            {/* Proceed Button */}
            <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition">
              Confirm & Pay
            </button>

            <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4">
              <Link href="/cart" className="text-blue-500 hover:underline">
                Back to Cart
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
