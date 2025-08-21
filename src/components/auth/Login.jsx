import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-white text-center">Login</h2>
        <p className="text-gray-400 text-center mt-1 mb-6">Welcome back</p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-5">
          No account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline font-medium">
            Sign Up
          </Link>{" "}
          or{" "}
          <Link to="/register" className="text-indigo-300 hover:underline font-medium">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
