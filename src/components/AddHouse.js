import { React, useState } from 'react';

const AddHouse = () => {
  const URL = 'http://localhost:3000/api/v1/houses';
  const [house, setHouse] = useState({
    address: '',
    house_type: '',
    rooms: '',
    balcony: '',
    size: '',
  });

  const handleChange = (e) => {
    setHouse({ ...house, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(house),
    })
      .then((res) => res.json());
    // .then((data) => {
    // });
    // bookHouse.addHouse(house);
    setHouse({
      address: '',
      house_type: '',
      rooms: '',
      balcony: '',
      size: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="address"
          placeholder="address"
          value={house.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="house_type"
          placeholder="house_type"
          value={house.house_type}
          onChange={handleChange}
        />
        <input
          type="integer"
          name="rooms"
          placeholder="rooms"
          value={house.rooms}
          onChange={handleChange}
        />
        <input
          type="boolean"
          name="balcony"
          placeholder="balcony"
          value={house.balcony}
          onChange={handleChange}
        />
        <input
          type="integer"
          name="size"
          placeholder="size"
          value={house.size}
          onChange={handleChange}
        />
        <button type="submit">Add House</button>
      </form>
    </div>
  );
};

export default AddHouse;
