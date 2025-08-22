import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shope from "./pages/Shope";
import Cart from "./components/checkout/Cart"; // direct cart page
import Checkout from "./pages/Checkout"; // parent checkout flow
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Signup from "./components/auth/SignUp";
import CategoryPage from "./pages/Categorypage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shope />} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/signup" element={<Signup />} />
             <Route path="/category/:title" element={<CategoryPage />} />
         

        {/* Simple Cart Page (direct view) */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout Flow (nested) */}
        <Route path="/checkout/*" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
