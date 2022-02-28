import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import loginService from "../../services/login";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
    console.log(
      "Form submitted",
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );
    loginService
      .register({ firstName, lastName, email, password, confirmPassword })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="reg-header">Create New Customer Account</h1>
        <h3 className="reg-title"> Create account</h3>
        <hr className="login-hr" />
        <form className="reg-form" onSubmit={formHandler}>
          <input
            className="reg-input"
            placeholder="  First Name"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="reg-input"
            placeholder="  Last Name"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="reg-input"
            placeholder="  Email Address"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="reg-input"
            placeholder="  Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="reg-input"
            placeholder="  Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="btn">Create an account</button>
        </form>
        <Link to="/login"> Back </Link>
      </div>
    </div>
  );
};

export default Register;
