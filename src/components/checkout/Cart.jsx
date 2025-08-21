import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.totalPrice);

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const handleNext = () => {
    if (!products || products.length === 0) {
      alert("Cart is empty.");
      return;
    }
    navigate("/checkout/address");
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

      {(!products || products.length === 0) ? (
        <p className="text-sm text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3 text-gray-700"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image || "https://via.placeholder.com/64"}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">₹{item.price}</p>

                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="px-2 py-0.5 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="px-2 py-0.5 bg-gray-200 rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="ml-2 text-red-600 underline text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <span className="font-semibold">₹{item.totalPrice}</span>
            </div>
          ))}
        </div>
      )}

      <div className="font-bold mt-4 text-green-700 text-right text-lg">
        Total: ₹{total || 0}
      </div>

      <button
        onClick={handleNext}
        disabled={!products || products.length === 0}
        className={`px-5 py-2.5 mt-6 w-full rounded-xl text-white ${
          (!products || products.length === 0)
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        Next: Address →
      </button>
    </motion.div>
  );
};

export default Cart;
