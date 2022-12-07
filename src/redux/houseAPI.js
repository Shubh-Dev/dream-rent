import { API_URL } from '../api/config';

export default class houseAPI {
  static fetchHouses = async () => {
    const houseAPIURL = `${API_URL}houses`;
    const response = await fetch(houseAPIURL);
    const data = await response.json();
    return data;
  };

  static deleteHouse = async (id) => {
    const houseAPIURL = `${API_URL}houses`;
    await fetch(houseAPIURL + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  static addHouse = async ({
    address, size, rooms, balcony, image,
  }) => {
    const houseAPIURL = `${API_URL}houses`;
    await fetch(houseAPIURL, {
      method: 'POST',
      body: JSON.stringify({
        address,
        size,
        rooms,
        image,
        balcony,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
}
