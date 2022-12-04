import React from 'react';
import './myreservations.css';

const MyReservations = () => (
  <div className="my-reservations-container">
    <h1 className="text-center text-uppercase">My Reservations</h1>
    <br />
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="reserve-card reserve-card--vertical">
          <div className="reserve-card_img">
            <img src="http://[::1]:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0036750e915ffa2b8bc58764f35544c232ff34f6/loginbgimg.jpg" alt="" />
          </div>
          <div className="reserve-card_content">
            <div className="reserve-card_title-section">
              <a href="#!" className="reserve-card_title">Fist Revenue New York</a>
              <div className="house-properties">
                <a href="#!" className="reserve-card_author">
                  Rooms:
                  {' '}
                  <span className="text-dark">5</span>
                </a>

                <a href="#!" className="reserve-card_author">
                  Type:
                  {' '}
                  <span className="text-dark">Villa</span>
                </a>
                <a href="#!" className="reserve-card_author">
                  balcony:
                  {' '}
                  <span className="text-dark">No</span>
                </a>
              </div>

            </div>
            <div className="reserve-card_bottom-section">
              <div className="space-between">
                <div />
                <div className="pull-right">
                  <span className="badge badge-success">Veg</span>
                </div>
              </div>
              <hr />
              <div className="space-between">
                <div className="reserve-card_price">
                  <span>Date : </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="reserve-card reserve-card--vertical">
          <div className="reserve-card_img">
            <img src="http://[::1]:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0036750e915ffa2b8bc58764f35544c232ff34f6/loginbgimg.jpg" alt="" />
          </div>
          <div className="reserve-card_content">
            <div className="reserve-card_title-section">
              <a href="#!" className="reserve-card_title">Fist Revenue New York</a>
              <div className="house-properties">
                <a href="#!" className="reserve-card_author">
                  Rooms:
                  {' '}
                  <span className="text-dark">5</span>
                </a>

                <a href="#!" className="reserve-card_author">
                  Type:
                  {' '}
                  <span className="text-dark">Villa</span>
                </a>
                <a href="#!" className="reserve-card_author">
                  balcony:
                  {' '}
                  <span className="text-dark">No</span>
                </a>
              </div>

            </div>
            <div className="reserve-card_bottom-section">
              <div className="space-between">
                <div />
                <div className="pull-right">
                  <span className="badge badge-success">Veg</span>
                </div>
              </div>
              <hr />
              <div className="space-between">
                <div className="reserve-card_price">
                  <span>Date : </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MyReservations;
