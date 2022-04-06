import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { logout } from "../../action/userAction";
import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <Link to="/">
            <h1 className="logo">E-Commerce</h1>
          </Link>
          <ul className="left-lists">
            <Link to="/products" className="links">
              Products
            </Link>
          </ul>
          <form>
            <input className="searchbar" type="text" placeholder="Search..." />
          </form>
        </div>

        <div className="navbar-right">
          <div className="right-lists">
            {userInfo ? (
              <>
                <li className="links" onClick={logoutHandler}>
                  Logout
                </li>
                <Link to="/cart" className="links">
                  <BsCart4 />
                </Link>
              </>
            ) : (
              <Link to="/login" className="links">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
