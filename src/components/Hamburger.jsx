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
    backgroundColor: 'rgba(89, 90, 87, 0.905)',
    overflow: 'hidden',
    transfrom: '0.5s',
    transition: 'transform 0.5s',
    paddingTop: '60px',

  };

  const crosBtnStyle = {
    position: 'fixed',
    zIndex: '2',
    color: 'white',
    fontSize: '22px',
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    padding: '10px',
  };

  const hamburgerStyle = {
    position: 'fixed',
    cursor: 'pointer',
    fontSize: '1.5rem',
    width: '50px',
    height: '50px',
    padding: '10px',
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
