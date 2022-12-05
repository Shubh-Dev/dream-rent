import { React } from 'react';
import { NavLink } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import './sidebar.css';

const Sidebar = () => {
  const width = window.innerWidth < 768;

  return (
    <div className="nav-bar-container">
      <div className={width ? 'no-display' : 'logo-container'}>
        <img src="logo.png" alt="logo" width="80" height="80" />
      </div>
      <div className="nav-links-container">
        <NavLink to="/" className={width ? 'mobile-nav-link' : 'nav-link'} activeClassName="active-link" exact>
          HOUSE LIST
        </NavLink>

        <NavLink to="/add-house" className={width ? 'mobile-nav-link' : 'nav-link'} activeClassName="active-link">
          ADD HOUSE
        </NavLink>

        <NavLink to="/reserve-list" className={width ? 'mobile-nav-link' : 'nav-link'} activeClassName="active-link">
          RESERVE LIST
        </NavLink>

        <NavLink to="/my-reservations" className={width ? 'mobile-nav-link' : 'nav-link'} activeClassName="active-link">
          MY RESERVATIONS
        </NavLink>
        
        <NavLink to="/reserves" className={width ? 'mobile-nav-link' : 'nav-link'} activeClassName="active-link">
          ADD RESERVATION
        </NavLink>
        
        <NavLink to="/delete-house" className={width ? 'mobile-nav-link' : 'nav-link'} activeClassName="active-link">
          DELETE HOUSE
        </NavLink>

        <NavLink to="/logout" className={width ? 'mobile-nav-link logout' : 'nav-link logout'} activeClassName="active-link">
          Log out
        </NavLink>

        <div className={width ? 'no-display' : 'social-logos'}>
          <SocialIcon />
          <p className="copyright-text">&copy; 2022 Dream rent & Co</p>
        </div>
      </div>

    </div>
  );
};
export default Sidebar;
