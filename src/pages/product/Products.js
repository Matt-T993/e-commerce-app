import ListProducts from "../../components/ListProducts";
import "./product.css";

const Products = () => {
  return (
    <div className="container">
      <h3>Products</h3>
      <div className=" products-content">
        <ListProducts />
      </div>
    </div>
  );
};

export default Products;
