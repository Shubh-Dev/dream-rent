import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AddHouse from './components/AddHouse';
import HouseList from './components/HouseList';
import ReserveList from './components/ReserveList';
import MyReservations from './components/MyReservations';
import Sidebar from './components/Sidebar';
import './App.css';
import Login from './components/Login';
import { isLogged } from './api/config';
import Logout from './components/Logout';

function App() {
  const location = useLocation();
  useEffect(() => {
    if (!isLogged && window.location.pathname !== '/login') {
      window.location = '/login';
    }
  }, [location]);

  return (
    <div className="App">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HouseList />} />
          <Route path="/add-house" element={<AddHouse />} />
          <Route path="/reserve-list" element={<ReserveList />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
