import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HouseList = () => {
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
    <div className="card-group m-5" style={{ width: '25rem' }}>
      { houses.map((house) => (
        <div className="card d-flex align-items-center border border-0" key={house.id}>
          <img src={house.image_path} className="card-img-top img-fluid thumbnail h-50 w-50 rounded-circle" alt="house comes here" />
          <div className="card-body align-items-center">
            <Link to={`houses/${house.id}`}>
              <h5 className="card-title fs-5">{house.address}</h5>
            </Link>
            <p className="card-text">{house.house_type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseList;
