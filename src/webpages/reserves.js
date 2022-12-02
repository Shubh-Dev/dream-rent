import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchHouses } from '../redux/house/houses';
import { fetchUsers } from '../redux/users/users';
import { addReserves } from '../redux/reserves/reserves';

const Reserve = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
    dispatch(fetchUsers());
  }, []);
  const houses = useSelector((state) => state.houses);
  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReserves({
      id: uuidv4(),
      date: e.target.date.value,
      time: e.target.time.value,
      user_id: e.target.user_id.value,
      house_id: e.target.house_id.value,
    }));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="col gx-3 gy-2 align-items-center m-5 p-5">
      <div className="row-sm-3 pb-3">
        <div className="input-group">
          <div className="input-group date" id="datepicker">
            <input type="text" className="form-control" id="date" />
            <span className="input-group-append">
              <span className="input-group-text bg-white d-block">
                <i className="fa fa-calendar" />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="row-sm-3 pb-3">
        <div className="input-group">
          <div className="input-group date">
            <input type="time" className="form-control" id="time" />
          </div>
        </div>
      </div>
      <div className="row-sm-3 pb-3">
        <select className="form-select" id="house_id">
          <option selected>Choose House...</option>
          {houses.map((item) => (
            <option key={item.id} value={item.id}>
              {item.address}
            </option>
          ))}
        </select>
      </div>
      <div className="row-sm-3 pb-3">
        <select className="form-select" id="user_id">
          <option selected>Choose User...</option>
          {users.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="row-auto">
        <button type="submit" className="btn btn-success">Reserve</button>
      </div>
    </form>
  );
};

export default Reserve;
