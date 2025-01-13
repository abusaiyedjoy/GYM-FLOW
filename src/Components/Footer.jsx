import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white py-16"
      style={{
        backgroundImage: "url('https://i.ibb.co/HY0QNj8/Footer.png')",
      }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">GymFlow</h2>
            <p className="text-sm leading-relaxed">
              Begin with a thorough assessment of your current fitness level, 
              considering factors like strength, flexibility, and endurance.
            </p>
            <p className="mt-4">
              <strong>Call Us Anytime:</strong> <br />
              +8801988084185
            </p>
            <p className="mt-2">
              <strong>Email Us:</strong> <br />
              abusaiyedjoy1@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Our Team</a></li>
              <li><a href="#" className="hover:text-red-500">Latest Project</a></li>
              <li><a href="#" className="hover:text-red-500">Pricing Plan</a></li>
              <li><a href="#" className="hover:text-red-500">Latest Blog</a></li>
              <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">Personal Training</a></li>
              <li><a href="#" className="hover:text-red-500">Group Training</a></li>
              <li><a href="#" className="hover:text-red-500">Muscle Building</a></li>
              <li><a href="#" className="hover:text-red-500">Virtual Gym Training</a></li>
              <li><a href="#" className="hover:text-red-500">Weight Loss Training</a></li>
              <li><a href="#" className="hover:text-red-500">Body Stretching</a></li>
              <li><a href="#" className="hover:text-red-500">Psycho Training</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Sign Up For Newsletter</h3>
            <p className="text-sm mb-4">Get 10% off your first order! Hurry up.</p>
            <form>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="p-3 rounded-md text-gray-900 placeholder-gray-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-600 mt-12 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FitKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
