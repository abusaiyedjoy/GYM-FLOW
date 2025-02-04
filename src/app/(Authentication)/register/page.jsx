import Link from "next/link";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl max-w-sm w-full border border-white border-opacity-30">
        <h1 className="text-4xl font-bold text-center text-white mb-6">Create Account</h1>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 bg-white text-purple-600 font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300">
            <FaGoogle className="text-xl" />
            Sign Up with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            <FaFacebookF className="text-xl" />
            Sign Up with Facebook
          </button>
        </div>

        <div className="flex items-center my-5">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-300">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Signup Form */}
        <form className="space-y-4">
          <div>
            <label className="text-white block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="text-white block mb-1">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="text-white block mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button className="w-full bg-white text-purple-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300">
            Sign Up
          </button>
        </form>

        <p className="text-white mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-yellow-300 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
