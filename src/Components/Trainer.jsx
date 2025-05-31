// components/TrainerSection.js
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import trainers from "./Trainer.js";

export default function TrainerSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="text-center mb-12">
        <p className="text-red-500 font-semibold uppercase tracking-wide">Our Trainer</p>
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Skilled Trainer</h2>
      </div>

      <div className="flex justify-center items-center gap-6 px-4 md:px-20 overflow-x-auto no-scrollbar">
        {/* Left Arrow */}
        <button className="p-3 rounded-full bg-red-500 text-white">
          <FaArrowLeft />
        </button>

        {/* Trainers */}
        {trainers.map((trainer, i) => (
          <div key={i} className="flex flex-col items-center text-center relative group">
            <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {trainer.socials.length > 0 ? (
                  <>
                    <a href="#" className="bg-white text-red-500 p-2 rounded-full">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="bg-white text-red-500 p-2 rounded-full">
                      <FaTwitter />
                    </a>
                    <a href="#" className="bg-white text-red-500 p-2 rounded-full">
                      <FaLinkedinIn />
                    </a>
                  </>
                ) : (
                  <div className="bg-red-600 text-white p-3 rounded-full">
                    <FaPlus />
                  </div>
                )}
              </div>
            </div>
            <h3 className="mt-4 font-bold text-lg text-gray-800">{trainer.name}</h3>
            <p className="text-red-500 text-sm">{trainer.role}</p>
          </div>
        ))}

        {/* Right Arrow */}
        <button className="p-3 rounded-full bg-red-500 text-white">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
