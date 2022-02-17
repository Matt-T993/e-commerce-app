import React from "react";
import { Link } from "react-router-dom";

import { BsCart4 } from "react-icons/bs";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <Link to="/">
            <h1 className="logo">E-Commerce</h1>
          </Link>
          <ul className="left-lists">
            <Link to="/products" className="links">
              Mens
            </Link>
            <Link to="/product" className="links">
              Women
            </Link>
            <li className="links">Accessories</li>
          </ul>
          <form>
            <input className="searchbar" type="text" placeholder="Search..." />
          </form>
        </div>

        <div className="navbar-right">
          <ul className="right-lists">
            <Link to="/login" className="links">
              Login
            </Link>
            <Link to="/cart" className="links">
              <BsCart4 />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
