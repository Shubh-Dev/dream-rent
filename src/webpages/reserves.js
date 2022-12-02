import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../redux/house/houses';
import { fetchUsers } from '../redux/users/users';

const Reserve = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
    dispatch(fetchUsers());
  }, []);
  const houses = useSelector((state) => state.houses);
  const users = useSelector((state) => state.users);

  return (
    <form className="col gx-3 gy-2 align-items-center m-5 p-5">
      <div className="row-sm-3 pb-3">
        <div className="col-sm-4">
          <div className="input-group date" id="datepicker">
            <input type="text" className="form-control" />
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
          <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Select Time" />
        </div>
      </div>
      <div className="row-sm-3 pb-3">
        <select className="form-select" id="specificSizeSelect">
          <option selected>Choose House...</option>
          {houses.map((item) => (
            <option key={item.id}>
              {item.address}
            </option>
          ))}
        </select>
      </div>
      <div className="row-sm-3 pb-3">
        <select className="form-select" id="specificSizeSelect">
          <option selected>Choose User...</option>
          {users.map((item) => (
            <option key={item.id}>
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
