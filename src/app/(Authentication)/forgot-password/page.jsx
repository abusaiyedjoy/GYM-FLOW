"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (

    <div className="w-full flex flex-col justify-center items-center bg-gray-900 min-h-screen px-10">
      <h2 className="text-white text-3xl font-bold mb-2">Forgot Password?</h2>
      <p className="text-gray-400 mb-6">Enter your email to reset your password</p>

      <form onSubmit={handleSubmit(() => { })}>
        <div className="relative w-full mb-4">
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {errors.email && <span className="text-red-600">Email is required</span>}

        <button type="submit" className="w-full bg-primary py-3 text-white font-bold rounded">
          Send Reset Link
        </button>
      </form>

      <p className="text-gray-400 mt-5">
        Remember your password? <Link href="/login" className="text-primary">Login</Link>
      </p>
      <p className="text-gray-400 mt-5">
        Remember your password? <Link href="/otp-verification" className="text-primary">OTP</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
