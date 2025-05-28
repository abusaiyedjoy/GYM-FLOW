import Title from "./ui/Title";

const Feature = () => {
    return (
        <section>
            <Title title={"Our Features"} description={"Discover what makes GymFlow the perfect fitness partner for you"}/>
            <div className="max-w-sm bg-white rounded-[30px] p-8 shadow-xl text-center relative">
                {/* Top red border */}
                <div className="absolute top-0 left-0 h-2 w-full rounded-t-[30px] bg-red-500"></div>

                {/* Icon */}
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-b from-red-500 to-red-700 flex items-center justify-center mb-6 shadow-lg">
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
                <button className="bg-gradient-to-b from-red-500 to-red-700 text-white font-bold py-2 px-6 rounded-full hover:brightness-110 shadow-md">
                    CALCULATE NOW
                </button>
            </div>
        </section>
    );
};

export default Feature;