import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Default from "./components/Default";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import ModalInCart from "./components/ModalInCart";
import Cart from "./components/Cart";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Default location={location} />} />
      </Routes>
      <ModalInCart />
    </React.Fragment>
  );
}

export default App;
