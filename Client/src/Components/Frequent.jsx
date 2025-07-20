"use client"
import { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import img from "./../../public/images/station.jpg"
import logo from "./../../public/images/logo.png"

const faqs = [
  {
    question: "How do I know if my brakes need to be replaced?",
    answer: "You should replace brakes if you hear squeaking or experience poor braking performance.",
  },
  {
    question: "How do I know which gym class is right for me?",
    answer: "Start with beginner classes and consult trainers for guidance.",
  },
  {
    question: "Do I need to bring any equipment to a gym class?",
    answer: "Most gyms provide basic equipment, but check with the instructor.",
  },
  {
    question: "Can I join a gym any type of class if I'm a beginner?",
    answer: "Yes, but it's recommended to start with beginner-friendly sessions.",
  },
];

export default function Frequent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div className="w-full">
          <Image
            src={img}
            alt="Workout"
            className="rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-primary font-bold uppercase mb-2">About Us</p>
          <h2 className="text-3xl md:text-5xl text-gray-800 font-extrabold mb-4">
            HERE GYM FITNESS MEETS <br />
            <span className="text-primary">EXCELLENCE!</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0f172a] p-4 rounded-lg border border-gray-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-semibold text-lg text-white">
                    {`0${index + 1}. ${faq.question}`}
                  </span>
                  <Plus
                    className={`transition-transform ${openIndex === index ? "rotate-45" : ""
                      }`}
                  />
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-400">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
