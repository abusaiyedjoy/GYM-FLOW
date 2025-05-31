import Link from "next/link";
import Title from "./ui/Title";

const Feature = () => {
    return (
        <section className="my-12">
            <Title title={"Our Features"} description={"Discover what makes GymFlow the perfect fitness partner for you"} />
            <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
                <div className="max-w-sm bg-white rounded-[30px] p-8 shadow-xl hover:shadow-2xl hover:shadow-red-400 hover:duration-200 text-center relative">
                    {/* Icon */}
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-b from-primary to-red-700 flex items-center justify-center mb-6 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M3 3h18v2H3zm2 4h14v14H5zm2 2v10h10V9z" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-extrabold text-gray-900 mb-2">BMI Calculator</h2>

                    {/* Description */}
                    <p className="text-gray-500 mb-6">
                        Track your body mass index and get personalized fitness recommendations based on your results.
                    </p>

                    {/* Button */}
                    <Link href="/bmi" className="button">
                        CALCULATE NOW
                    </Link>
                </div>
                <div className="max-w-sm bg-white rounded-[30px] p-8 shadow-xl hover:shadow-2xl hover:shadow-red-400 hover:duration-200 text-center relative">
                    {/* Icon */}
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-b from-primary to-red-700 flex items-center justify-center mb-6 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M3 3h18v2H3zm2 4h14v14H5zm2 2v10h10V9z" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-extrabold text-gray-900 mb-2">BMI Calculator</h2>

                    {/* Description */}
                    <p className="text-gray-500 mb-6">
                        Track your body mass index and get personalized fitness recommendations based on your results.
                    </p>

                    {/* Button */}
                    <Link href="/bmi" className="button">
                        CALCULATE NOW
                    </Link>
                </div>
                <div className="max-w-sm bg-white rounded-[30px] p-8 shadow-xl hover:shadow-2xl hover:shadow-red-400 hover:duration-200 text-center relative">
                    {/* Icon */}
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-b from-primary to-red-700 flex items-center justify-center mb-6 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M3 3h18v2H3zm2 4h14v14H5zm2 2v10h10V9z" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-extrabold text-gray-900 mb-2">BMI Calculator</h2>

                    {/* Description */}
                    <p className="text-gray-500 mb-6">
                        Track your body mass index and get personalized fitness recommendations based on your results.
                    </p>

                    {/* Button */}
                    <Link href="/bmi" className="button">
                        CALCULATE NOW
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Feature;