"use client"
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
