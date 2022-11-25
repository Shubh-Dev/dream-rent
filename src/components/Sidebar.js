import React from 'react';
import { NavLink } from 'react-router-dom';
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

    </div>

  </div>

);

export default Sidebar;
