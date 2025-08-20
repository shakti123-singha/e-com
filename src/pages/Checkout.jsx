import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Cart from "../components/checkout/Cart.jsx";
import Address from "../components/checkout/Address.jsx";
import PaymentsForm from "../components/checkout/PaymentsForm.jsx";
import ReviewOrder from "../components/checkout/ReviewOrder.jsx";

function Checkout() {
  const products = useSelector((state) => state.cart.products) || [];
  const [step, setStep] = useState(1);

  // Address State
  const [address, setAddress] = useState({ name: "", street: "", city: "", pincode: "" });

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [paymentDetails, setPaymentDetails] = useState({});

  const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const navigate = (targetStep) => setStep(targetStep);

  const steps = ["Cart", "Address", "Payment", "Review"];

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    // Reset checkout if needed
    setStep(1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      {/* Stepper */}
      <div className="flex items-center justify-center mb-8 space-x-4">
        {steps.map((label, i) => (
          <div key={i} className="flex items-center cursor-pointer" onClick={() => navigate(i + 1)}>
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold ${
                step >= i + 1 ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className={`w-10 h-1 ${step > i + 1 ? "bg-green-600" : "bg-gray-300"}`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <Cart key="cart" products={products} total={total} navigate={navigate} />
        )}
        {step === 2 && (
          <Address
            key="address"
            address={address}
            setAddress={setAddress}
            navigate={navigate}
          />
        )}
        {step === 3 && (
          <PaymentsForm
            key="payment"
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            paymentDetails={paymentDetails}
            setPaymentDetails={setPaymentDetails}
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
          />
        )}
        {step === 4 && (
          <ReviewOrder
            key="review"
            products={products}
            total={total}
            selectedAddress={address}
            paymentMethod={paymentMethod}
            paymentDetails={paymentDetails}
            onBack={() => setStep(3)}
            onEditAddress={() => setStep(2)}
            onEditPayment={() => setStep(3)}
            onPlaceOrder={handlePlaceOrder}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Checkout;
