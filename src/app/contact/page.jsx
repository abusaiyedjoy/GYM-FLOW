"use client"
import Header from "@/Components/ui/Header";
import { usePathname } from "next/navigation";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaChevronDown, FaPen } from "react-icons/fa";


const metadata = {
    title: "GYM-FLOW | Contact Us",
    description: "Get in touch with us for any inquiries, support, or feedback about GYM-FLOW.",
};

const Contact = () => {
    const path = usePathname();

    return (
        <>
            <Header Title={"Contact Page"} Path={path}></Header>
            <div className="bg-white text-gray-800">
                {/* Contact Info Boxes */}
                <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-4 bg-white shadow-md p-6 rounded-lg">
                        <FaMapMarkerAlt className="text-red-600 text-3xl" />
                        <div>
                            <h4 className="font-bold text-lg">Address</h4>
                            <p>67GR+XV2, Unnamed Road, Chatmohar</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white shadow-md p-6 rounded-lg">
                        <FaPhoneAlt className="text-red-600 text-3xl" />
                        <div>
                            <h4 className="font-bold text-lg">Contact Info</h4>
                            <p>+163-6589-9654</p>
                            <p>info@fitkit.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white shadow-md p-6 rounded-lg">
                        <FaClock className="text-red-600 text-3xl" />
                        <div>
                            <h4 className="font-bold text-lg">Opening Hours</h4>
                            <p>Mon to Sat: 6AM - 8PM</p>
                            <p className="text-red-600 font-semibold">Sunday Closed</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-white shadow-md rounded-xl">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Get In Touch!</h2>
                        <form className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full pl-10 pr-4 py-3 rounded-md border bg-gray-50 focus:outline-red-600"
                                />
                                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full pl-10 pr-4 py-3 rounded-md border bg-gray-50 focus:outline-red-600"
                                />
                                <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full pl-10 pr-4 py-3 rounded-md border bg-gray-50 focus:outline-red-600"
                                />
                                <FaPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                            </div>
                            <div className="relative">
                                <select className="w-full pl-10 pr-4 py-3 rounded-md border bg-gray-50 focus:outline-red-600">
                                    <option>Select Service</option>
                                    <option>Personal Training</option>
                                    <option>Nutrition Plan</option>
                                    <option>General Inquiry</option>
                                </select>
                                <FaChevronDown className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                            </div>
                            <div className="relative">
                                <textarea
                                    placeholder="Write Message..."
                                    rows="4"
                                    className="w-full pl-10 pr-4 py-3 rounded-md border bg-gray-50 resize-none focus:outline-red-600"
                                ></textarea>
                                <FaPen className="absolute top-4 left-3 text-gray-400" />
                            </div>
                            <button
                                type="submit"
                                className="bg-red-600 text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition w-full"
                            >
                                SEND MESSAGE NOW
                            </button>
                        </form>
                    </div>

                    {/* Right Image */}
                    <div className="hidden lg:block">
                        <img
                            src="/images/bodybuilder.png" // Replace with your image path
                            alt="Strong Man"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-10">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242160.5083033814!2d90.30117468764188!3d24.229276456370376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756921c496dbf8d%3A0x92f98c6c697a0fd4!2sChatmohar!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
                        className="w-full h-[500px] grayscale"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
export default Contact;