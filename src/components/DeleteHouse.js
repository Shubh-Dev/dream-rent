import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// fetch houselist from api and display with a delete button,
// when delete button is clicked, delete the house from the api

const DeleteHouse = () => {
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get('http://[::1]:3000/api/v1/houses')
      .then((res) => {
        setIsLoaded(true);
        setHouses(res.data);
      });
    // .catch((error) => {
    //   setIsLoaded(true);
    //   setError(error);
    // });
  }, []);

  // if (error) {
  //   return (
  //     <div>
  //       Error:
  //       {error.message}
  //     </div>
  //   );
  // } if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

  if (!isLoaded) {
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
            <button type="button" className="btn btn-danger" onClick={() => axios.delete(`http://[::1]:3000/api/v1/houses/${house.id}`)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeleteHouse;
