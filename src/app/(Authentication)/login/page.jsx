"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [focusedField, setFocusedField] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen w-full bg-gray-900">
      {/* Left Side - Hidden on small screens */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="https://i.ibb.co.com/rKjPspy8/john-fornander-TAZo-Um-Dqz-Xk-unsplash.jpg"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-10 py-8">
        <h2 className="text-white text-3xl font-bold mb-2 text-center">
          Welcome Back!
        </h2>
        <p className="text-gray-400 mb-6 text-center">
          Please sign in to continue.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          {/* Email Input */}
          <div className="mb-4 relative">
            <label className="block text-gray-500 mb-1" htmlFor="email">
              Your Email
            </label>
            <div
              className={`w-full p-3 rounded flex items-center border-2 ${focusedField === "email"
                  ? "border-l-4 border-primary bg-gray-700"
                  : "border-gray-700 bg-gray-800"
                }`}
            >
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-white"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label className="block text-gray-500 mb-1" htmlFor="password">
              Password
            </label>
            <div
              className={`w-full p-3 rounded flex items-center border-2 ${focusedField === "password"
                  ? "border-l-4 border-primary bg-gray-700"
                  : "border-gray-700 bg-gray-800"
                }`}
            >
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-white"
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-400 text-sm">
              <input
                type="checkbox"
                className="mr-2 accent-primary"
                {...register("rememberMe")}
              />
              Remember Me
            </label>
            <Link href="/forgot-password" className="text-primary text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary py-3 text-white font-bold rounded hover:bg-[#b90101ce] transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Don't have an account? */}
        <p className="text-gray-400 mt-5 text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
