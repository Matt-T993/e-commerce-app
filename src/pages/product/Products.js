import React from "react";
import { ProductList } from "../../myData";
import "./product.css";

const Products = () => {
  return (
    <div className="container">
      <h3>Products</h3>
      <div className=" products-content">
        {ProductList.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="card-img">
              <img className="image" src={item.image} alt="product" />
            </div>
            <div className="card-header">
              <h2 className="product-name">{item.title}</h2>
              <p className="product-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
