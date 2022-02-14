import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <h1 className="logo">E-Commerce</h1>
          <ul className="left-lists">
            <li className="links">Mens</li>
            <li className="links">Women</li>
            <li className="links">Accessories</li>
            <li className="links">Collections</li>
          </ul>
          <form>
            <input className="searchbar" type="text" placeholder="Search..." />
          </form>
        </div>

        <div className="navbar-right">
          <ul className="right-lists">
            <li className="links">Login</li>
            <li className="links">Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
