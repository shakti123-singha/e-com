import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-semibold">e-Shop</h3>
          <p className="mt-4">
            Your one-stop for all your needs. Shop with us and experience the
            best online shopping experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">Shop</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <Link to="#" className="hover:text-gray-400"><FaFacebook /></Link>
            <Link to="#" className="hover:text-gray-400"><FaTwitter /></Link>
            <Link to="#" className="hover:text-gray-400"><FaGithub /></Link>
            <Link to="#" className="hover:text-gray-400"><FaLinkedin /></Link>
          </div>

          {/* Newsletter Form */}
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-lg bg-gray-400 border border-gray-600 text-black"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
