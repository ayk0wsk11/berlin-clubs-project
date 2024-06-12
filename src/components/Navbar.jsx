import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconLogo from "../assets/image/logo2.png";
import { NavLink } from "react-router-dom";
import "../stylesheet/Navbar.css";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/clubs/${clubs.name}`);
  };

  return (
    <nav className="navbar">
      <div className="icon">
        <NavLink to="/">
          <img src={IconLogo} className="icon-logo" alt="Icon Logo" />
        </NavLink>
      </div>
      <div className="navItems">
        <div className="Clubs">
          <NavLink to="/clubs" activeclassname="active-link"></NavLink>
        </div>
      </div>
      <div className="navItems">
        <div className="Clubs">
          <NavLink to="/clubs" activeclassName="active-link">
            All Clubs
          </NavLink>
          <NavLink to="/add-club" activeclassname="active-link">
            Add Clubs
          </NavLink>
        </div>

        {currentUser ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
