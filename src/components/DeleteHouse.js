import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './deletehouse.css';

const DeleteHouse = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get('http://[::1]:3000/api/v1/houses')
      .then((res) => {
        setIsLoaded(true);
        setHouses(res.data);
      });
  }, []);

  const reRenderPage = (id) => {
    const newHouses = houses.filter((house) => house.id !== id);
    setHouses(newHouses);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="delete-house-container">
      { houses.map((house) => (
        <div className="card" key={house.id}>
          <img src={house.image_path} alt="house" className="delete-house-img" />
          <div className="card-body">
            <h5 className="card-title">
              Address:
              {house.address}
            </h5>
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
            <button type="button" className="delete-btn" onClick={() => { axios.delete(`http://[::1]:3000/api/v1/houses/${house.id}`); reRenderPage(house.id); }}>Delete</button>

          </div>

        </div>

      ))}

    </div>

  );
};

export default DeleteHouse;
