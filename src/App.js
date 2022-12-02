import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AddHouse from './components/AddHouse';
import HouseList from './components/HouseList';
import ReserveList from './components/ReserveList';
import MyReservations from './components/MyReservations';
import ReservationForm from './components/ReservationForm';
import Sidebar from './components/Sidebar';
import DeleteHouse from './components/DeleteHouse';
import './App.css';
import Details from './webpages/details';
import Reserves from './webpages/reserves';
import Login from './components/Login';
import { isLogged } from './api/config';
import Logout from './components/Logout';
import Hamburger from './components/Hamburger';

function App() {
  const location = useLocation();
  useEffect(() => {
    if (!isLogged && window.location.pathname !== '/login') {
      window.location = '/login';
    }
  }, [location]);

  return (
    <div className="App">
      <div className="hamburger">
        <Hamburger />
      </div>
      <div className="sidebar-container desktop">
        <Sidebar />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" exact="true" element={<HouseList />} />
          <Route path="/houses/:id" element={<Details />} />
          <Route path="/reserves" element={<Reserves />} />
          <Route path="/add-house" element={<AddHouse />} />
          <Route path="/reserve-list" element={<ReserveList />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/delete-house" element={<DeleteHouse />} />
          <Route path="/reservation-form/:id" element={<ReservationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
