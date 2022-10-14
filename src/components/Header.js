import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(authActions.logout());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          {isLoggedIn ? (
            <li>
              <button className="logout-btn" onClick={logOut}>
                Logout
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
