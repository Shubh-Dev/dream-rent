import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../redux/users/users';

const ReservationForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.users);

  const { houseId } = useParams();
  const user = users.find((user) => user.name === localStorage.getItem('user_name')) || 0;
  console.log(houseId, user.id);
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
          <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Enter Time: ex. 13:00" />
        </div>
      </div>
      <div className="row-auto">
        <button type="submit" className="btn btn-success">Reserve</button>
      </div>
    </form>
  );
};

export default ReservationForm;
