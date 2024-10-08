// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import ProductDetail from "./components/products/ProductDetail";
import Cart from "./components/cart/Cart";
import Paymentgateway from "./pages/Paymentgateway";
import ShippingInfo from "./pages/ShippingInfo";
import ConfirmationPage from "./pages/ConfirmationPage";
import Notifications from "./pages/Notifications";
import { ErrorPageLoading } from "./services/svgs";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <div className="bg-slate-100">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Paymentgateway />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/confirmationpage" element={<ConfirmationPage />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/error" element={<ErrorPageLoading />} />
          {/* Authentication routes */}
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
    
    </div>
  );
}

export default App;
