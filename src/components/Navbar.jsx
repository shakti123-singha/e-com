import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const products = useSelector((state) => state.cart.products || []); // ✅ safe

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">E-SHOP</Link>
        </div>

        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="search"
              className="w-full border py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart />
           {products.length > 0 && (
  <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full text-white flex items-center justify-center">
    {products.length}
  </span>
)}

          </Link>
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 ty-4 text-sm font-bold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/" className="hover:underline">Contact</Link>
        <Link to="/" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
