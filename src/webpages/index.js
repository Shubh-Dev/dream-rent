import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import House from './house';
import Details from './details';

function WebPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<House />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default WebPages;
