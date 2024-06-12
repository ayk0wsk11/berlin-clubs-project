import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconLogo from "../../image/logo2.png"
import { NavLink } from 'react-router-dom';
import '../stylesheet/Navbar.css'



const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
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
          <NavLink to="/clubs" activeclassname="active-link">
            All Clubs
          </NavLink>
          <NavLink to="/add-club" activeclassname="active-link">
            Add Clubs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;