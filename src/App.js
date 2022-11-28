import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddHouse from './components/AddHouse';
// import HouseList from './components/HouseList';
import ReserveList from './components/ReserveList';
import MyReservations from './components/MyReservations';
import Sidebar from './components/Sidebar';
import DeleteHouse from './components/DeleteHouse';
import Hamburger from './components/Hamburger';
import './App.css';
import House from './webpages/house';
import Details from './webpages/details';

function App() {
  return (
    <div className="App">
      <div className="sidebar-container">
        <Hamburger />
        <Sidebar />
      </div>

      <div className="main-container">
        <Routes>
          <Route path="/" element={<House />} />
          <Route path="/houses/:id" element={<Details />} />
          <Route path="/add-house" element={<AddHouse />} />
          <Route path="/reserve-list" element={<ReserveList />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/delete-house" element={<DeleteHouse />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
