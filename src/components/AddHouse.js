import { React, useState } from 'react';

const AddHouse = () => {
  const URL = 'http://localhost:3000/api/v1/houses';
  const [house, setHouse] = useState({
    address: '',
    house_type: '',
    rooms: '',
    balcony: '',
    size: '',
    image: null,
  });

  const handleChange = (e) => {
    setHouse({ ...house, [e.target.name]: e.target.value });
  };

  const redirectAfterSubmit = () => window.location.replace('/');

  const onImageChange = (e) => {
    setHouse({ ...house, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    console.log(JSON.stringify(house));
    e.preventDefault();
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(house),
    })
      .then((res) => res.json());

    setHouse({
      address: '',
      house_type: '',
      rooms: '',
      balcony: '',
      size: '',
      image: null,
    });
    // redirectAfterSubmit();
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
        <select name="house_type" value={house.house_type} onChange={handleChange}>
          <option value="apartment">apartment</option>
          <option value="house">house</option>
          <option value="penthouse">penthouse</option>
          <option value="studio">studio</option>
          <option value="villa">villa</option>
          <option value="igloo">igloo</option>
          <option value="treehouse">treehouse</option>
          <option value="row-house">row house</option>
          <option value="other">other</option>
        </select>
        <input
          type="integer"
          name="rooms"
          placeholder="rooms"
          value={house.rooms}
          onChange={handleChange}
        />
        <select name="balcony" value={house.balcony} onChange={handleChange}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>

        <input
          type="integer"
          name="size"
          placeholder="size"
          value={house.size}
          onChange={handleChange}
        />

        <input
          type="file"
          accept="image/*"
          name="image"
          multiple={false}
          onChange={onImageChange}
        />

        <button type="submit" onSubmit={redirectAfterSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default AddHouse;
