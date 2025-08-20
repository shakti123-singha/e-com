import React, { useState } from "react";

export default function Address({
  addresses,
  setAddresses,
  selectedAddress,
  setSelectedAddress,
  onBack,
  onNext,
}) {
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    pincode: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const resetForm = () =>
    setNewAddress({ name: "", street: "", city: "", pincode: "" });

  const handleSave = () => {
    if (!newAddress.name || !newAddress.street || !newAddress.city || !newAddress.pincode) {
      alert("Please fill all address fields.");
      return;
    }
    if (editIndex !== null) {
      const updated = [...addresses];
      updated[editIndex] = newAddress;
      setAddresses(updated);
      setEditIndex(null);
    } else {
      setAddresses([...addresses, newAddress]);
    }
    setSelectedAddress(newAddress);
    resetForm();
  };

  const handleEdit = (idx) => {
    setNewAddress(addresses[idx]);
    setEditIndex(idx);
  };

  const handleDelete = (idx) => {
    const target = addresses[idx];
    const updated = addresses.filter((_, i) => i !== idx);
    setAddresses(updated);
    if (selectedAddress === target) setSelectedAddress(null);
    if (editIndex === idx) {
      setEditIndex(null);
      resetForm();
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-800 mb-4">📍 Shipping Address</h2>

      <div className="grid gap-2">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={newAddress.name}
          onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Street Address"
          className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={newAddress.street}
          onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="City"
            className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={newAddress.city}
            onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="Pincode"
            className="w-full border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={newAddress.pincode}
            onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
          />
        </div>

        <div className="flex gap-2 mt-1">
          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm shadow-sm transition"
          >
            {editIndex !== null ? "Update Address" : "Save Address"}
          </button>
          {editIndex !== null && (
            <button
              onClick={() => {
                setEditIndex(null);
                resetForm();
              }}
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-2 rounded-lg text-sm transition"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {addresses.length > 0 && (
        <div className="mt-5">
          <h3 className="font-semibold text-sm text-slate-700 mb-2">Saved Addresses</h3>
          <div className="space-y-2">
            {addresses.map((addr, idx) => {
              const isSelected = selectedAddress === addr;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedAddress(addr)}
                  className={`p-3 border rounded-lg text-sm flex items-center justify-between cursor-pointer transition
                    ${isSelected ? "border-emerald-600 bg-emerald-50" : "border-slate-200 hover:bg-slate-50"}`}
                >
                  <div className="text-slate-700">
                    {addr.name}, {addr.street}, {addr.city} - {addr.pincode}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(idx);
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(idx);
                      }}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="bg-slate-400 hover:bg-slate-500 text-white px-5 py-2 rounded-xl text-sm transition"
        >
          ← Back
        </button>
        <button
          onClick={() => {
            if (!selectedAddress) return alert("Please select an address.");
            onNext();
          }}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl text-sm transition"
        >
          Next: Payment →
        </button>
      </div>
    </div>
  );
}
