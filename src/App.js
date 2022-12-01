import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import AddHouse from './components/AddHouse';
import HouseList from './components/HouseList';
import ReserveList from './components/ReserveList';
import MyReservations from './components/MyReservations';
import Sidebar from './components/Sidebar';
import DeleteHouse from './components/DeleteHouse';
import './App.css';
import Details from './webpages/details';
import Login from './components/Login';
import { isLogged } from './api/config';
import Logout from './components/Logout';
import ReservationForm from './components/ReservationForm';

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
        <GiHamburgerMenu />
      </div>
      <div className="sidebar-container desktop">
        <Sidebar />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HouseList />} />
          <Route path="/houses/:id" element={<Details />} />
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
