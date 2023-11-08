import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import ModalInCart from "./components/ModalInCart";


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
