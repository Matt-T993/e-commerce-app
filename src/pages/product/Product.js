import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../action/productAction";
import { useParams } from "react-router-dom";
import "./product.css";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch]);

  // const location = useLocation();
  // const id = location.pathname.split("/")[2];
  // const [product, setProduct] = useState({});

  // useEffect(() => {
  //   const getProduct =    () => {
  //     try {
  //       const res = await axios.get("/products/" + id);
  //       setProduct(res.data);
  //     } catch {}
  //   };
  //   getProduct();
  // }, [id]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <img className="product-image" src="/image/1.jpg" alt="product" />
        </div>
        <div className="right">
          <div className="right-header">
            <h3 className="header">{product.brand}</h3>
            <p>${product.price}</p>
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
            <p> {product.desc}</p>
            <h3 className="header">Product Details</h3>
            <div className="detail-lists">
              <li className="detail">Hood strong</li>
              <li className="detail">qiwnvqwpivnpnqf</li>
              <li className="detail">This is a nice jacket</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
