import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const House = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('http://[::1]:3000/api/v1/houses')
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setHouses(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  } if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card-group m-5">
      { houses.map((house) => (
        <div className="card" key={house.id}>
          <img src={house.image_path} className="card-img-top" alt="..." style={{ width: '200px', height: '200px' }} />
          <div className="card-body">
            <Link to={`house/${house.id}`}>
              <h5 className="card-title">
                Address:
                {house.address}
              </h5>
            </Link>
            <p className="card-text">
              House Type:
              {house.house_type}
            </p>
            <p className="card-text">
              <small className="text-muted">
                Rooms :
                {house.rooms}
              </small>
            </p>
            <p className="card-text">
              <small className="text-muted">
                Size:
                {house.size}
              </small>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default House;
