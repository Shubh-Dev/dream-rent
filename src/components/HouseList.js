import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaInstagram,
} from 'react-icons/fa';
import { fetchHouses } from '../redux/house/houses';

const HouseList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
  }, []);
  const houses = useSelector((state) => state.houses);
  return (
    <div className="container text-center pt-5">
      <h1>LATEST HOUSES</h1>
      <h2 className="lgrey-text">Please select a house model</h2>
      <div className="main-list d-flex flex-column container pt-5">
        {houses.map((house) => (
          <div className="house-container mb-3 text-center" key={house.id}>
            <Link to={`houses/${house.id}`}>
              <img className="homepage-house-img " style={{ width: '100%', height: '100%' }} src={house.image_path} alt="house_image" />
            </Link>
            <h3 className="mt-3">
              {house.house_type.toUpperCase()}
              {' '}
              HOUSE
            </h3>
            <div className="mt-3 d-flex justify-content-center">
              <div className="bottom-border" />
            </div>
            <h4 className="mt-3 lgrey-text">{house.address}</h4>
            <div className="house-icons d-flex justify-content-center gap-3 mt-5">
              <FaFacebookF className="lgrey-text" size={30} />
              <FaTwitter className="lgrey-text" size={30} />
              <FaInstagram className="lgrey-text" size={30} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseList;
