import React, { useContext } from "react";
import { CartContext } from "../context/cartcontext.jsx";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2 className="logo">TechBazaar</h2>
      <div className="cart-info">
        <span>🛒 {cart.length} items</span>
      </div>
    </nav>
  );
};

export default Navbar;
