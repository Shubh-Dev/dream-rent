import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReserves } from '../redux/reserves/reserves';
import { fetchHouses } from '../redux/house/houses';
import { fetchUsers } from '../redux/users/users';

const ReserveList = () => {
  const reserves = useSelector((state) => state.reserves);
  const houses = useSelector((state) => state.houses);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReserves());
    dispatch(fetchHouses());
    dispatch(fetchUsers());
  }, [dispatch]);

  if (users !== undefined && houses !== undefined && reserves !== undefined) {
    return (
      <div className="container">
        <div className="row d-flex p-5">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">No. of Visitors</th>
                  <th scope="col">Visitor Name</th>
                  <th scope="col">House Address</th>
                </tr>
              </thead>
              <tbody>
                {reserves.map((reserve) => (
                  <tr key={reserve.id}>
                    <th scope="row">
                      {reserve.date}
                    </th>
                    <td>
                      {new Date(reserve.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td>
                      {reserve.visitors}
                    </td>
                    <td>
                      {users.find((u) => u.id === reserve.user_id).name}
                    </td>
                    <td>
                      {houses.find((h) => h.id === reserve.house_id).address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row d-flex p-5">
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default ReserveList;
