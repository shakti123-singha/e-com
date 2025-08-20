import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/checkout/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Shope from "./pages/Shope";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shope />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> {/* ✅ Add this */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
