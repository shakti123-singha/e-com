import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ReviewOrder() {
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart.products) || [];
  const total = useSelector((state) => state.cart.totalPrice) || 0;

  const { address, payment } = useMemo(() => {
    const a = localStorage.getItem("checkout.address");
    const p = localStorage.getItem("checkout.payment");
    return {
      address: a ? JSON.parse(a) : null,
      payment: p ? JSON.parse(p) : null,
    };
  }, []);

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const placeOrder = () => {
    if (!address) return alert("Address missing. Please add address.");
    if (!payment) return alert("Payment details missing. Please add payment.");
    alert("Order placed successfully! ✅");
    // Optional: localStorage cleanup
    // localStorage.removeItem("checkout.address");
    // localStorage.removeItem("checkout.payment");
    navigate("/");
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800">📝 Review Order</h2>

      <div className="mb-4">
        <h3 className="font-semibold">Cart Items:</h3>
        {products.map((item) => (
          <div key={item.id} className="flex justify-between text-sm py-1">
            <span>
              {item.name} x{item.quantity}
            </span>
            <span>₹{item.totalPrice}</span>
          </div>
        ))}
        <div className="font-bold mt-2">Total: ₹{total}</div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Shipping Address:</h3>
        {address ? (
          <>
            <p>
              {address.name}, {address.street}, {address.city},{" "}
              {address.pincode}
            </p>
            <button
              onClick={() => navigate("/checkout/address")}
              className="text-sm text-blue-600 mt-1 underline"
            >
              Edit
            </button>
          </>
        ) : (
          <button
            className="text-sm text-blue-600 underline"
            onClick={() => navigate("/checkout/address")}
          >
            Add Address
          </button>
        )}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Payment Method:</h3>
        {payment ? (
          <>
            <p>{payment.method}</p>
            <button
              onClick={() => navigate("/checkout/payment")}
              className="text-sm text-blue-600 mt-1 underline"
            >
              Edit
            </button>
          </>
        ) : (
          <button
            className="text-sm text-blue-600 underline"
            onClick={() => navigate("/checkout/payment")}
          >
            Add Payment
          </button>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/checkout/payment")}
          className="px-4 py-2 bg-gray-300 rounded-lg"
        >
          ← Back
        </button>
        <button
          onClick={placeOrder}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Place Order ✅
        </button>
      </div>
    </motion.div>
  );
}
