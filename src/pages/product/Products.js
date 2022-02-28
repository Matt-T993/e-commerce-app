import { useState, useEffect } from "react";
import productService from "../../services/products";

import { ProductList } from "../../myData";
import "./product.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container">
      <h3>Products</h3>
      <div className=" products-content">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="card-img">
              <img className="image" src={item.image} alt="product" />
            </div>
            <div className="card-header">
              <h2 className="product-name">{item.brand}</h2>
              <p className="product-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
