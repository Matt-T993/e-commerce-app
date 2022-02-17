import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="container">
      <div className="cart-wrapper">
        <h1 className="cart-header">Shopping Cart</h1>
        <hr />
        <div className="cart">
          <img className="cart-img" src="/image/1.jpg" alt="product" />
          <div className=" cart-content">
            <h3 className="cart-product">Green Shirt</h3>
            <p className="cart-size">Size: S</p>
            <p className="cart-colour">Colour: Black</p>
            <div className="counter">
              <button className="counter-btn">-</button>
              <p>1</p>
              <button className="counter-btn">+</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Cart;
