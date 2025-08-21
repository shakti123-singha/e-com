import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-white text-center">Register</h2>
        <p className="text-gray-400 text-center mt-1 mb-6">Fill all details</p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Register
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-5">
          Already registered?{" "}
          <Link to="/login" className="text-amber-400 hover:underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
