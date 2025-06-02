"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "./../../public/images/logo.png"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const Navlinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "/bmi",
      title: "BMI",
    },
    {
      id: "/shop",
      title: "Shop",
    },
    {
      id: "/schedule",
      title: "Schedule",
    },
    {
      id: "/contact",
      title: "Contact",
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled
        ? "bg-black backdrop-blur-md shadow-md"
        : "bg-transparent text-white"
        }`}
    >
      <div className="px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link
            href="/"
            className="text-primary text-lg md:text-xl font-extrabold uppercase transition-colors duration-300 flex justify-center items-center gap-2"
          >
            <Image
              className="w-14"
              src={logo}
              alt="logo"
            />
            GymFlow
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-lg">
          {Navlinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.id}
                className="hover:text-primary transition-colors duration-300"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center space-x-4 items-center">
          {/* Cart & Notification button */}
          <div className="flex justify-center items-center space-x-2">
            <div className="hover:bg-red-400 relative cursor-pointer hover:bg-opacity-30 hover:shadow-md p-2 rounded-full">
              <FaCartPlus size={24}/>
                <span className="bg-primary absolute top-0 right-0 px-1 rounded-full text-xs">0</span>
            </div>
            <div className="hover:bg-red-400 cursor-pointer hover:bg-opacity-30 hover:shadow-md p-2 rounded-full">
              <MdOutlineNotificationsNone size={24} />
            </div>
          </div>


          {/* Authentication Button */}
          <Link href={"/login"} className="button hidden md:block">
            Sign In
          </Link>
          <div className="flex justify-end items-center md:hidden gap-2">

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" focus:outline-none text-white"
            >
              {isMenuOpen ? <IoCloseSharp size={26} />
                : <HiOutlineMenuAlt2 size={26} />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black pb-6 px-5">
          <ul className="space-y-4 py-4">
            {Navlinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.id}
                  className="block text-lg hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-full">
            <Link href={"/login"} className="w-full text-xl btn bg-primary">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
