import React from "react";
import { motion } from "framer-motion";

const Cart = ({ products = [], total, navigate }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800">🛒 Cart Summary</h2>
      {products.length === 0 ? (
        <p className="text-sm text-gray-500">Your cart is empty.</p>
      ) : (
        products.map((item) => (
          <div key={item.id} className="flex justify-between py-2 border-b text-gray-700 text-sm">
            <span>{item.name} (x{item.quantity})</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))
      )}
      <div className="font-bold mt-4 text-green-700">Total: ₹{total}</div>
      <button
        onClick={() => navigate(2)}
        className="px-5 py-2.5 mt-6 w-full bg-green-600 text-white rounded-xl"
      >
        Next: Address →
      </button>
    </motion.div>
  );
};

export default Cart;
