import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../stylesheet/Navbar.css";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <nav id="navbar">
      <NavLink to="/">
        <span id="berlin-title">berlin</span>
        <span id="clubs-title">
          <b>clubs</b>
        </span>
      </NavLink>
      {currentUser ? (
        <button id="logout-button" onClick={handleLogout}>
          logout
        </button>
      ) : (
        <Link to="/login">
          <button id="login-button">login</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
