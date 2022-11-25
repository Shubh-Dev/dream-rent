import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddHouse from './components/AddHouse';
import HouseList from './components/HouseList';
import ReserveList from './components/ReserveList';
import MyReservations from './components/MyReservations';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
