import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../redux/house/houses';
import { fetchUsers } from '../redux/users/users';
import { addReserves } from '../redux/reserves/reserves';

const Reserve = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
    dispatch(fetchUsers());
  }, [dispatch]);

  const houses = useSelector((state) => state.houses);
  const users = useSelector((state) => state.users);
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReserves({
      date: e.target.date.value,
      time: e.target.time.value,
      visitors: e.target.visitors.value,
      user_id: e.target.user_id.value,
      house_id: e.target.house_id.value,
    }));
    setMessage(
      `Reservation saved 
Date: ${e.target.date.value} 
Time: ${e.target.time.value} 
No. of visitors: ${e.target.visitors.value} 
House Address: ${e.target.house_id.options[e.target.house_id.selectedIndex].text} 
Visitor Name: ${e.target.user_id.options[e.target.user_id.selectedIndex].text}`,
    );
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="col gx-3 gy-2 align-items-center m-5 p-5">
      <div className="row-sm-3 pb-3">
        <div className="input-group">
          <div className="input-group date">
            <input type="date" className="form-control" id="date" required />
          </div>
        </div>
      </div>
      <div className="row-sm-3 pb-3">
        <div className="input-group">
          <div className="input-group date">
            <input type="time" className="form-control" id="time" required />
          </div>
        </div>
      </div>
      <div className="row-sm-3 pb-3">
        <div className="input-group">
          <div className="input-group date">
            <input type="text" className="form-control" id="visitors" placeholder="Number of Visitors" required />
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
      <br />
      <pre>
        {message}
      </pre>
    </form>
  );
};

export default Reserve;
