import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="reg-header">Create New Customer Account</h1>
        <h3 className="reg-title"> Create account</h3>
        <hr className="login-hr" />
        <form className="reg-form">
          <input className="reg-input" placeholder="  First Name" />
          <input className="reg-input" placeholder="  Last Name" />
          <input className="reg-input" placeholder="  Email Address" />
          <input className="reg-input" placeholder="  Password" />
          <input className="reg-input" placeholder="  Confirm Password" />
          <button className="btn">Create an account</button>
        </form>
        <Link to="/login"> Back </Link>
      </div>
    </div>
  );
};

export default Register;
