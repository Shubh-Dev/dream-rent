import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaInstagram,
} from 'react-icons/fa';

const House = ({
  index, image, type, address,
}) => (
  <div className="house-container mb-3 text-center">
    <Link to={`houses/${index}`}>
      <img className="homepage-house-img " style={{ width: '100%', height: '100%' }} src={image} alt="house_image" />
    </Link>
    <h3 className="mt-3">
      {type.toUpperCase()}
      {' '}
      HOUSE
    </h3>
    <div className="mt-3 d-flex justify-content-center">
      <div className="bottom-border" />
    </div>
    <p className="mt-3 dgrey-text house-description">{address}</p>
    <div className="house-icons d-flex justify-content-center gap-3 mt-5">
      <FaFacebookF className="lgrey-text" size={30} />
      <FaTwitter className="lgrey-text" size={30} />
      <FaInstagram className="lgrey-text" size={30} />
    </div>
  </div>
);

export default House;
