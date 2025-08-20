import React from "react";

export default function ReviewOrder({
  products,
  total,
  selectedAddress,
  paymentMethod,
  paymentDetails,
  onBack,
  onEditAddress,
  onEditPayment,
  onPlaceOrder,
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-800 mb-4">📦 Review & Place Order</h2>

      <div className="space-y-2">
        {products.map((item) => (
          <div key={item.id} className="flex justify-between text-sm py-2 border-b border-slate-100">
            <span className="text-slate-700">
              {item.name} <span className="text-xs text-slate-500">(x{item.quantity})</span>
            </span>
            <span className="font-medium text-slate-800">₹{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-3">
        <span className="text-sm text-slate-600">Total</span>
        <span className="text-lg font-bold text-emerald-700">₹{total}</span>
      </div>

      <div className="mt-5 grid gap-3">
        <div className="p-3 border border-slate-200 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-slate-700">Shipping Address</h3>
            <button onClick={onEditAddress} className="text-blue-600 text-sm hover:underline">
              Change
            </button>
          </div>
          <p className="text-sm text-slate-700 mt-1">
            {selectedAddress
              ? `${selectedAddress.name}, ${selectedAddress.street}, ${selectedAddress.city} - ${selectedAddress.pincode}`
              : "No address selected"}
          </p>
        </div>

        <div className="p-3 border border-slate-200 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-slate-700">Payment</h3>
            <button onClick={onEditPayment} className="text-blue-600 text-sm hover:underline">
              Change
            </button>
          </div>
          <p className="text-sm text-slate-700 mt-1">
            {paymentMethod}
            {paymentMethod === "UPI" && paymentDetails?.upiId ? ` • ${paymentDetails.upiId}` : ""}
            {(paymentMethod === "Credit Card" || paymentMethod === "Debit Card") &&
              paymentDetails?.cardNumber
              ? ` • **** **** **** ${String(paymentDetails.cardNumber).slice(-4)}`
              : ""}
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="bg-slate-400 hover:bg-slate-500 text-white px-5 py-2 rounded-xl text-sm transition"
        >
          ← Back
        </button>
        <button
          onClick={onPlaceOrder}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl text-sm shadow-md transition"
        >
          ✅ Place Order
        </button>
      </div>
    </div>
  );
}
