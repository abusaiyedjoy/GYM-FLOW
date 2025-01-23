"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const Navlinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "/about",
      title: "About",
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
    },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-md shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link
            href="/"
            className="text-primary transition-colors duration-300 flex justify-center items-center gap-2"
          >
            <img
              width={"42px"}
              src="https://i.ibb.co.com/4sxSDzp/White-and-Blue-Modern-Gym-Logo-removebg-preview.png"
              alt="logo"
            />
            GymFlow
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
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

        <div className="flex justify-end items-center gap-2">
          {/* Authentication Button */}
          <Link href={"/login"} className="button">
            Sign In
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none text-white"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="space-y-4 py-4 px-4">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
