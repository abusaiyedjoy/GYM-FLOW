import Title from "./ui/Title";

const Testimonial = () => {
    return (
        <section className="text-center px-6 py-16 bg-white">
            <Title title={"Success Stories"} description={"Hear what our members have to say about their journey with"}/>

            {/* Testimonial Box */}
            <div className="bg-gray-50 max-w-3xl mx-auto p-8 rounded-3xl shadow-md relative">
                {/* Quotation Mark Decoration */}
                <div className="absolute top-4 left-6 text-pink-300 text-6xl font-serif select-none opacity-30">“</div>

                {/* Testimonial Text */}
                <p className="text-lg italic text-gray-800 mb-6 z-10 relative">
                    "I've tried many gyms before, but GymFlow truly changed my life. The trainers here are incredibly knowledgeable and supportive. In just 3 months, I've lost 20 pounds and gained so much confidence!"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-6">
                    <img
                        src="https://i.pravatar.cc/50?img=12" // Replace with actual user image
                        alt="User profile"
                        className="w-12 h-12 rounded-full border-2 border-white shadow"
                    />
                    <div className="text-left">
                        <h4 className="font-semibold text-gray-900">Emma Watson</h4>
                        <p className="text-sm text-gray-400">Member since 2021</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
