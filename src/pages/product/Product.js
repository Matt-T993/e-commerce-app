import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <img className="product-image" src="/image/1.jpg" alt="product" />
        </div>
        <div className="right">
          <div className="right-header">
            <h3 className="header">Green shirt</h3>
            <p>$499.95</p>
          </div>
          <div className="size">
            <input class type="checkbox" />
            <label className="checkbox-size">S</label>
            <input type="checkbox" />
            <label className="checkbox-size">M</label>
            <input type="checkbox" />
            <label className="checkbox-size">L</label>
          </div>
          <button className="btn">Add to Bag</button>
          <div className="description">
            <p> full zip hooded shell jacket</p>
            <h3 className="header">Product Details</h3>
            <ul className="detail-lists">
              <li className="detail">Hood strong</li>
              <li className="detail">qiwnvqwpivnpnqf</li>
              <li className="detail">This is a nice jacket</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
