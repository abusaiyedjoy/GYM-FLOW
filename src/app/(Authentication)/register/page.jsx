
// import { signIn } from "next-auth/react";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>
        {/* <button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-red-700 transition duration-300"
        >
          Sign Up with Google
        </button>
        <button
          onClick={() => signIn("facebook")}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
        >
          Sign Up with Facebook
        </button> */}
      </div>
      <p>
        Go to <Link href={"/login"} className="text-red-300">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
