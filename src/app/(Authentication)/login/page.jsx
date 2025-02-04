"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-2xl max-w-md w-full border border-white border-opacity-30 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-bold text-center text-white mb-6">Welcome Back</h1>
        <p className="text-center text-gray-300 mb-6">Sign in to continue to your account</p>

        {/* Social Login */}
        <div className="space-y-4">
          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center bg-white bg-opacity-20 text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-30 transition duration-300"
          >
            <FcGoogle className="w-6 h-6 mr-2" />
            Sign In with Google
          </button>
          <button
            onClick={() => signIn("facebook")}
            className="w-full flex items-center justify-center bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            <FaFacebook className="w-6 h-6 mr-2" />
            Sign In with Facebook
          </button>
        </div>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-500 opacity-30" />
          <span className="mx-3 text-gray-300">OR</span>
          <hr className="flex-grow border-gray-500 opacity-30" />
        </div>

        {/* Email Sign-In */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            signIn("email", { email });
          }}
          className="space-y-4"
        >
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Sign In with Email
          </button>
        </form>

        <p className="text-center mt-6 text-gray-300">
          Don't have an account?{" "}
          <Link href="/register" className="text-yellow-300 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
