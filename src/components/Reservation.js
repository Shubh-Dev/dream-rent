import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Reservation(props) {
  const houses = useSelector((state) => state.houses);
  const { reserve } = props;
  const house = houses.find((house) => house.id === reserve.house_id);

  if (house) {
    return (
      <div key={reserve.id} className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="reserve-card reserve-card--vertical">
            <div className="reserve-card_img">
              <img src={house.image_path} alt="" />
            </div>
            <div className="reserve-card_content col-lg-12">
              <div className="reserve-card_title-section col-lg-12">
                <a href="#!" className="reserve-card_title">{house.address}</a>
                <div className="house-properties">
                  <a href="#!" className="reserve-card_user">
                    Rooms:
                    {' '}
                    <span className="text-dark">{house.rooms}</span>
                  </a>

                  <a href="#!" className="reserve-card_user">
                    Type:
                    {' '}
                    <span className="text-dark">{house.house_type}</span>
                  </a>
                  <a href="#!" className="reserve-card_user">
                    balcony:
                    {' '}
                    <span className="text-dark">{house.balcony ? 'Yes' : 'No'}</span>
                  </a>
                </div>

              </div>
              <div className="reserve-card_bottom-section col-lg-12">
                <div className="space-between">
                  <div />
                  <div className="pull-right">
                    <span className="badge badge-success">Veg</span>
                  </div>
                </div>
                <hr className="col-lg-12" />
                <div className="space-between col-lg-12">
                  <div className="reserve-card_data">
                    <span>Date: </span>
                    <span className="text-dark">{reserve.date}</span>
                  </div>
                </div>
                <div className="space-between col-lg-12">
                  <div className="reserve-card_data col-lg-12">
                    <span>Time: </span>
                    <span className="text-dark">{new Date(reserve.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return '';
}

Reservation.propTypes = { reserve: PropTypes.shape({}).isRequired };

export default Reservation;
