import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import './sidebar.css';

const Sidebar = () => (
  <div className="nav-bar-container">

    <div className="logo-container">
      <h4>My-logo</h4>
    </div>

    <div className="nav-links-container">
      <NavLink to="/">
        HouseList
      </NavLink>

      <NavLink to="/add-house">
        Add House
      </NavLink>

      <NavLink to="/reserve-list">
        Reserve List
      </NavLink>

      <NavLink to="/my-reservations">
        My Reservations
      </NavLink>

      <NavLink to="/delete-house">
        Delete House
      </NavLink>

      <div className="social-logos">
        <SocialIcon />
        <p>&copy; 2022 Dream rent & Co</p>
      </div>
    </div>

  </div>

);

export default Sidebar;
