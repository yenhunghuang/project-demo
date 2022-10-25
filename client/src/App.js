import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage/ForgetPasswordPage";

import "./App.css";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage/CartPage";
import ProductDetailPage from "./pages/CartPage/ProductDetailPage/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage/CreateProductPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<CreateAccountPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        {/* <Route path="/my-cart" element={<CartPage />} /> */}
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/createProduct" element={<CreateProductPage />} />
        <Route path="/editProducts/:productID" element={<EditProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
