import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
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
        <form className="login-form">
          <input className="login-input" placeholder="  Email Address" />
          <input className="login-input" placeholder="  Password" />
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
