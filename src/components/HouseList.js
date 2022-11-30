import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHouses } from '../redux/house/houses';

const HouseList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
  }, []);
  const houses = useSelector((state) => state.houses);
  return (
    <div className="mainList d-flex flex-column container">
      {houses.map((house) => (
        <div className="card" key={house.id}>
          <Link to={`houses/${house.id}`}>
            <img style={{ width: '50%', height: '70%' }} src={house.image_path} alt="house_image" />
          </Link>

        </div>
      ))}
    </div>
  );
};

export default HouseList;
