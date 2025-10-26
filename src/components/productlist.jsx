import React, { useContext } from "react";
import { CartContext } from "../context/cartcontext.jsx";

// Import local images
import iphone from "../assets/iphone.png";
import macbookair from "../assets/macbookair.png";
import sony from "../assets/sony.png";
import applewatch from "../assets/applewatch.png";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 134999,
    image: iphone,
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 124999,
    image: macbookair,
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 29999,
    image: sony,
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: 41999,
    image: applewatch,
  },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
