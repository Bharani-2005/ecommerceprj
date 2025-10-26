import React from "react";
import Navbar from "./components/navbar.jsx";
import ProductList from "./components/productlist.jsx";
import Cart from "./components/cart.jsx";
import { CartProvider } from "./context/cartcontext.jsx";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <header className="hero">
          <h1>Welcome to TechBazaar 🛒</h1>
          <p>Your one-stop shop for the latest gadgets!</p>
        </header>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
