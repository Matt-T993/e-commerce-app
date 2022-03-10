import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../action/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  const formHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted", email, password);
    dispatch(login(email, password));
  };

  if (userInfo) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">Customer Login</h1>
        <h3 className="customer-title">New customers</h3>
        <hr className="login-hr" />
        <p className="login-text">
          By creating an account with our store, you will be able to move
          through the checkout process faster, store multiple shipping
          addresses, view and track your orders in your account and more
        </p>
        <Link to="/register">
          <button className="btn">Create a New Account</button>
        </Link>
        <h3 className="customer-title">Registered Customers</h3>
        <hr className="login-hr" />
        <form className="login-form" onSubmit={formHandler}>
          <input
            className="login-input"
            placeholder="  Email Address"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            placeholder="  Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
