import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-white text-center">Sign Up</h2>
        <p className="text-gray-400 text-center mt-1 mb-6">Create your account</p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-400 hover:underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
