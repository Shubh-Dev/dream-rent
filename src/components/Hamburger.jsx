import { React, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Sidebar from './Sidebar';

const Hamburger = () => {
  const sideBarStyle = {
    width: '50%',
    height: '100%',
    position: 'fixed',
    zIndex: '1',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgb(149, 242, 35)',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
  };

  const crosBtnStyle = {
    position: 'fixed',
    zIndex: '2',
  };

  const hamburgerStyle = {
    position: 'fixed',
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="hamburger">
      { isOpen ? <AiOutlineClose style={crosBtnStyle} onClick={toggle} />
        : <GiHamburgerMenu onClick={toggle} style={hamburgerStyle} /> }
      {isOpen && <div style={sideBarStyle}><Sidebar /></div> }
    </div>
  );
};

export default Hamburger;
