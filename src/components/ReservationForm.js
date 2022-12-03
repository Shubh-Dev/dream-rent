import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHouses } from '../redux/house/houses';
import { addReserves } from '../redux/reserves/reserves';
import { fetchUsers } from '../redux/users/users';
import './reserveform.css';

const ReservationForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.users);
  const houses = useSelector((state) => state.houses);
  const { houseId } = useParams();
  const house = houses.find((item) => item.id === parseInt(houseId, 10));
  const user = users.find((user) => user.name === localStorage.getItem('user_name')) || 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      addReserves({
        id: 0,
        date: e.target.date.value,
        time: e.target.time.value,
        visitors: e.target.visitors.value,
        user_id: user.id,
        house_id: house.id,
      }),
    ).then((res) => {
      if (res) {
        window.location.href = '/my-reservations';
      }
    });
  };
  if (house && user) {
    return (
      <div className="reserve_container" style={{ '--reserve-form-background': `url("${house.image_path}")` }}>
        <h1 className="house_address">{house.address}</h1>
        <hr className="divider" />
        <h5 className="house_info">
          Hello,
          {' '}
          {user.name}
          {' '}
        </h5>
        <h5 className="house_info">Please fill in the form below to reserve this house. </h5>
        <form onSubmit={handleSubmit} className="p-5 reserve">
          <div className="row-sm-3 pb-3">
            <div className="col-sm-12">
              <div className="date input-group" id="datepicker">
                <input type="date" className="form-control" id="date" />
              </div>
            </div>
          </div>
          <div className="row-sm-3 pb-3">
            <div className="col-sm-12">
              <div className="input-group date" id="timepicker">
                <input type="time" className="form-control" id="time" />
              </div>
            </div>
          </div>
          <div className="row-sm-3 pb-3">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="visitors" placeholder="Number of Visitors" />
            </div>
          </div>
          <div className="row-auto">
            <button type="submit" className="btn btn-success center">Reserve</button>
          </div>
        </form>
      </div>
    );
  }
  return <h1>Loading...</h1>;
};

export default ReservationForm;
