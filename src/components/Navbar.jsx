import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconLogo from "../../image/logo2.png";
import { NavLink } from "react-router-dom";
import "../stylesheet/Navbar.css";

const Navbar = ({currentUser, setCurrentUser}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  

  const handleLogout = () => {
    setCurrentUser(null);
    nav("/");
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
      <form className="navbar-search" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="navItems">
        <div className="icon">
          <img src={IconLogo} className="icon-logo" />
        </div>

        <div className="Clubs">
          <NavLink to="/clubs" activeclassName="active-link">
            All Clubs
          </NavLink>
          <NavLink to="/add-club" activeclassName="active-link">
            Add Clubs
          </NavLink>
        </div>
        <div></div>
        {currentUser ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
