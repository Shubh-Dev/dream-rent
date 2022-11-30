import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(`http://[::1]:3000/api/v1/houses/${id}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setDetail(data);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, [id]);
  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (detail) {
    return (
      <div className="container">
        <div className="row d-flex gap-3 p-5">
          <div className="col-sm-8">
            <img src={detail.image_path} className="thumbnail img-responsive img-fluid rounded mx-auto d-block h-75 w-75" alt="house comes here" />
          </div>
          {/* <div className="col-sm-2" /> */}
          <div className="col-sm-3">
            <p className="fs-3">{detail.address}</p>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>House Type</td>
                  <td>{detail.house_type}</td>
                </tr>
                <tr>
                  <td>Balcony</td>
                  <td>{detail.balcony}</td>
                </tr>
                <tr>
                  <td>Rooms</td>
                  <td>{detail.rooms}</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>{detail.size}</td>
                </tr>
              </tbody>
            </table>
            <div className="d-grid gap-2 mt-5">
              <button type="submit" className="btn btn-primary">Reserve</button>
              <button type="submit" className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;