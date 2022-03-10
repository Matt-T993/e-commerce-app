import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from ".././action/productAction";

const ListProducts = () => {
  const id = useParams().id;
  console.log(id, " = this is the id");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return products.map((item) => (
    <div className="product-card" key={item.id}>
      {/* {error && <div className="error-message">{error}</div>} */}
      <div className="card-img">
        <Link to={`/products/${item._id}`}>
          <img className="image" src={item.image} alt="product" />
        </Link>
      </div>
      <div className="card-header">
        <h2 className="product-name">{item.brand}</h2>
        <p className="product-price">${item.price}</p>
      </div>
    </div>
  ));
};

export default ListProducts;
