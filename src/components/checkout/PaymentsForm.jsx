import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PaymentsForm() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [paymentDetails, setPaymentDetails] = useState({});

  const handleNext = () => {
    if (paymentMethod === "UPI") {
      if (
        !paymentDetails.upiId ||
        !/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(paymentDetails.upiId)
      ) {
        alert("Enter a valid UPI ID (e.g., username@bank).");
        return;
      }
    }
    if (paymentMethod === "Credit Card" || paymentMethod === "Debit Card") {
      const { cardName, cardNumber, expiry, cvv } = paymentDetails;
      if (!cardName || !cardNumber || !expiry || !cvv) {
        alert("Please fill all card details.");
        return;
      }
      if (!/^\d{16}$/.test((cardNumber || "").replace(/\s+/g, ""))) {
        alert("Card number must be 16 digits.");
        return;
      }
      if (!/^\d{2}\/\d{2}$/.test(expiry || "")) {
        alert("Expiry must be MM/YY.");
        return;
      }
      if (!/^\d{3}$/.test(cvv || "")) {
        alert("CVV must be 3 digits.");
        return;
      }
    }

    // Save to localStorage for Review step
    localStorage.setItem(
      "checkout.payment",
      JSON.stringify({ method: paymentMethod, details: paymentDetails })
    );
    navigate("/checkout/review");
  };

  const Field = ({ className = "", ...props }) => (
    <input
      {...props}
      className={`w-full border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
    />
  );

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
      <h2 className="text-lg font-semibold text-slate-800 mb-4">💳 Payment</h2>

      <select
        value={paymentMethod}
        onChange={(e) => {
          setPaymentMethod(e.target.value);
          setPaymentDetails({});
        }}
        className="w-full border border-slate-200 rounded-lg p-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option>Credit Card</option>
        <option>Debit Card</option>
        <option>UPI</option>
        <option>Cash on Delivery</option>
      </select>

      {paymentMethod === "UPI" && (
        <Field
          placeholder="UPI ID (e.g., username@bank)"
          value={paymentDetails.upiId || ""}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, upiId: e.target.value })
          }
        />
      )}

      {(paymentMethod === "Credit Card" || paymentMethod === "Debit Card") && (
        <div className="space-y-2">
          <Field
            placeholder="Name on Card"
            value={paymentDetails.cardName || ""}
            onChange={(e) =>
              setPaymentDetails({ ...paymentDetails, cardName: e.target.value })
            }
          />
          <Field
            placeholder="Card Number (16 digits)"
            inputMode="numeric"
            value={paymentDetails.cardNumber || ""}
            onChange={(e) =>
              setPaymentDetails({
                ...paymentDetails,
                cardNumber: e.target.value.replace(/\D/g, "").slice(0, 16),
              })
            }
          />
          <div className="grid grid-cols-2 gap-2">
            <Field
              placeholder="MM/YY"
              value={paymentDetails.expiry || ""}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, expiry: e.target.value })
              }
            />
            <Field
              placeholder="CVV"
              inputMode="numeric"
              value={paymentDetails.cvv || ""}
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
                })
              }
            />
          </div>
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/checkout/address")}
          className="px-4 py-2 bg-gray-300 rounded-lg"
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Next →
        </button>
      </div>
    </motion.div>
  );
}
