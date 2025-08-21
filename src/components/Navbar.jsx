import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const products = useSelector((state) => state.cart.products || []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link to="/">E-SHOP</Link>
        </div>

        {/* Search */}
        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full text-white flex items-center justify-center">
                {products.length}
              </span>
            )}
          </Link>

          {/* Auth Links */}
          <div className="hidden md:flex space-x-2">
            <Link
              to="/login"
              className="text-sm font-medium px-3 py-1 border rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm font-medium px-3 py-1 border rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile user icon */}
          <Link to="/login" className="block md:hidden">
            <FaUser className="text-lg" />
          </Link>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-center space-x-10 py-3 text-sm font-bold text-slate-700">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
