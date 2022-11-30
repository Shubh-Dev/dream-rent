//import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import './sidebar.css';

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  return (

    <div className="nav-bar-container">

      {/* <div className="hamburger-container">
        <Hamburger isOpen={isOpen} toggle={toggle} />
      </div> */}

      <div className="logo-container">
        <img src="2.png" alt="logo" width="80" height="80" />
      </div>

      <div className="nav-links-container">
        <NavLink to="/" className="nav-link" activeClassName="nav-link--active" exact>
          HOUSE LIST
        </NavLink>

        <NavLink to="/add-house" className="nav-link" activeClassName="nav-link--active">
          ADD HOUSE
        </NavLink>

        <NavLink to="/reserve-list" className="nav-link" activeClassName="nav-link--active">
          RESERVE LIST
        </NavLink>

        <NavLink to="/my-reservations" className="nav-link" activeClassName="nav-link--active">
          MY RESERVATIONS
        </NavLink>

        <NavLink to="/delete-house" className="nav-link" activeClassName="nav-link--active">
          DELETE HOUSE
        </NavLink>

        <div className="social-logos">
          <SocialIcon />
          <p className="copyright-text">&copy; 2022 Dream rent & Co</p>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
