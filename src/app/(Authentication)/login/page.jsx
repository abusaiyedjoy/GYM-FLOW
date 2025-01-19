// import { signIn } from "next-auth/react";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign In</h1>
        {/* <button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-red-700 transition duration-300"
        >
          Sign In with Google
        </button>
        <button
          onClick={() => signIn("facebook")}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mb-4 hover:bg-blue-800 transition duration-300"
        >
          Sign In with Facebook
        </button>
        <hr className="my-4" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            signIn("email", { email });
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300"
          >
            Sign In with Email
          </button>
        </form> */}
        <p>
        Go to <Link href={"/register"} className="text-red-300">Sign Up</Link>
      </p>
      </div>
    </div>
  );
};

export default SignIn;
