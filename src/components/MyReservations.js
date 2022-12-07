import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../redux/house/houses';
import { fetchReserves } from '../redux/reserves/reserves';
import { fetchUsers } from '../redux/users/users';
import './myreservations.css';
import Reservation from './Reservation';

const MyReservations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReserves());
    dispatch(fetchHouses());
    dispatch(fetchUsers());
  }, [dispatch]);
  const reserves = useSelector((state) => state.reserves);
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.name === localStorage.getItem('user_name')) || 0;
  const userReserves = reserves.filter((reserve) => reserve.user_id === user.id);
  if (user && userReserves) {
    return (
      <div className="my-reservations-container">
        <h1 className="text-center text-uppercase">My Reservations</h1>
        <br />
        {userReserves.map((reserve) => <Reservation key={reserve.id} reserve={reserve} />)}
      </div>
    );
  }
  return (
    <div className="my-reservations-container">
      <h1 className="text-center text-uppercase">My Reservations</h1>
      <br />
      <div className="col-lg-12">
        <h3 className="text-center">No reservations yet</h3>
      </div>
    </div>
  );
};

export default MyReservations;
