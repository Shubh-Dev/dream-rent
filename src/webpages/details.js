import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/v1/houses/${id}`)
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
  });
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
      <div className="container p-2">
        <div className="row">
          <div className="col-sm-4 mt-5">
            <img src={detail.image_path} className="rounded mx-auto d-block" alt="house comes here" />
          </div>
          <div className="col-sm-5" />
          <div className="col-sm-3 mt-5">
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
