import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaInstagram,
} from 'react-icons/fa';

const House = ({
  index, image, type, address,
}) => (
  <div className="house-container text-center">
    <Link to={`houses/${index}`}>
      <div className="img-wrapper">
        <img className="homepage-house-img" src={image} alt="house_image" />
      </div>
    </Link>
    <h3 className="mt-3">
      {type.toUpperCase()}
    </h3>
    <div className="mt-3 d-flex justify-content-center">
      <div className="bottom-border" />
    </div>
    <p className="mt-3 dgrey-text house-description">{address}</p>
    <div className="house-icons d-flex justify-content-center gap-3 mt-3">
      <FaFacebookF className="lgrey-text" size={30} />
      <FaTwitter className="lgrey-text" size={30} />
      <FaInstagram className="lgrey-text" size={30} />
    </div>
  </div>
);

export default House;
