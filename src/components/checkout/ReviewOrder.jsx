import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  MapPin,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

export default function ReviewOrder() {
  const navigate = useNavigate();
  const location = useLocation();

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
    navigate("/");
  };

  // ✅ Dynamic stepper logic
  const steps = [
    { label: "Cart", path: "/cart", icon: ShoppingCart },
    { label: "Address", path: "/checkout/address", icon: MapPin },
    { label: "Payment", path: "/checkout/payment", icon: CreditCard },
    { label: "Review", path: "/checkout/review", icon: CheckCircle2 },
  ];

  const currentIndex = steps.findIndex((s) =>
    location.pathname.startsWith(s.path)
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-lg mx-auto"
    >
      {/* ✅ Stepper */}
      <div className="flex items-center justify-between mb-8 relative">
        {/* Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isDone = idx < currentIndex;
          const isActive = idx === currentIndex;

          return (
            <div key={idx} className="flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all
                ${isDone ? "bg-emerald-500 border-emerald-500 text-white" : ""}
                ${isActive ? "bg-white border-emerald-500 text-emerald-600" : ""}
                ${!isDone && !isActive ? "bg-white border-gray-400 text-gray-500" : ""}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span
                className={`text-xs mt-1 ${
                  isActive ? "text-emerald-600 font-semibold" : "text-gray-700"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Cart Items */}
      <div className="mb-6 bg-gray-50 p-4 rounded-xl shadow-sm">
        <h3 className="font-semibold flex items-center gap-2 mb-2 text-gray-800">
          <ShoppingCart className="w-5 h-5 text-emerald-600" /> Cart Items
        </h3>
        {products.map((item) => (
          <div
            key={item.id}
            className="flex justify-between text-sm py-1 border-b last:border-0"
          >
            <span>
              {item.name} x{item.quantity}
            </span>
            <span>₹{item.totalPrice}</span>
          </div>
        ))}
        <div className="font-bold mt-2 text-right text-gray-800">
          Total: ₹{total}
        </div>
      </div>

      {/* Address */}
      <div className="mb-6 bg-gray-50 p-4 rounded-xl shadow-sm">
        <h3 className="font-semibold flex items-center gap-2 mb-2 text-gray-800">
          <MapPin className="w-5 h-5 text-emerald-600" /> Shipping Address
        </h3>
        {address ? (
          <div className="text-sm text-gray-700">
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
          </div>
        ) : (
          <button
            className="text-sm text-blue-600 underline"
            onClick={() => navigate("/checkout/address")}
          >
            Add Address
          </button>
        )}
      </div>

      {/* Payment */}
      <div className="mb-6 bg-gray-50 p-4 rounded-xl shadow-sm">
        <h3 className="font-semibold flex items-center gap-2 mb-2 text-gray-800">
          <CreditCard className="w-5 h-5 text-emerald-600" /> Payment Method
        </h3>
        {payment ? (
          <div className="text-sm text-gray-700">
            <p>{payment.method}</p>
            <button
              onClick={() => navigate("/checkout/payment")}
              className="text-sm text-blue-600 mt-1 underline"
            >
              Edit
            </button>
          </div>
        ) : (
          <button
            className="text-sm text-blue-600 underline"
            onClick={() => navigate("/checkout/payment")}
          >
            Add Payment
          </button>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/checkout/payment")}
          className="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 transition"
        >
          ← Back
        </button>
        <button
          onClick={placeOrder}
          className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow transition"
        >
          Place Order ✅
        </button>
      </div>
    </motion.div>
  );
}
