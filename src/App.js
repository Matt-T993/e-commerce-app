import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/Register";
import Products from "./pages/product/Products";
import Product from "./pages/product/Product";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [user, setUser] = useState(null);
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
