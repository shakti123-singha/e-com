import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Cart from "../components/checkout/Cart.jsx";
import Address from "../components/checkout/Address.jsx";
import PaymentsForm from "../components/checkout/PaymentsForm.jsx";
import ReviewOrder from "../components/checkout/ReviewOrder.jsx";

export default function Checkout() {
  const products = useSelector((state) => state.cart.products) || [];
  const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [address, setAddress] = useState({ name: "", street: "", city: "", pincode: "" });
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [paymentDetails, setPaymentDetails] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const handlePlaceOrder = () => {
    alert("✅ Order placed successfully!");
    navigate("/"); // redirect to home
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* ✅ Default redirect */}
          <Route index element={<Navigate to="cart" replace />} />

          <Route
            path="cart"
            element={
              <motion.div variants={cardVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-md">
                <Cart products={products} total={total} onNext={() => navigate("../address")} />
              </motion.div>
            }
          />
          <Route
            path="address"
            element={
              <motion.div variants={cardVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-md">
                <Address
                  address={address}
                  setAddress={setAddress}
                  onNext={() => navigate("../payment")}
                  onBack={() => navigate("../cart")}
                />
              </motion.div>
            }
          />
          <Route
            path="payment"
            element={
              <motion.div variants={cardVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-md">
                <PaymentsForm
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                  paymentDetails={paymentDetails}
                  setPaymentDetails={setPaymentDetails}
                  onNext={() => navigate("../review")}
                  onBack={() => navigate("../address")}
                />
              </motion.div>
            }
          />
          <Route
            path="review"
            element={
              <motion.div variants={cardVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-md">
                <ReviewOrder
                  products={products}
                  total={total}
                  selectedAddress={address}
                  paymentMethod={paymentMethod}
                  paymentDetails={paymentDetails}
                  onBack={() => navigate("../payment")}
                  onPlaceOrder={handlePlaceOrder}
                  onEditAddress={() => navigate("../address")}
                  onEditPayment={() => navigate("../payment")}
                />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
