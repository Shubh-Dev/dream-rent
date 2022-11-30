export default class houseAPI {
  static fetchHouses = async () => {
    const houseAPIURL = 'http://[::1]:3000/api/v1/houses';
    const response = await fetch(houseAPIURL);
    const data = await response.json();
    return data;
  };

  static deleteHouse = async (id) => {
    const houseAPIURL = 'http://[::1]:3000/api/v1/houses';
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
    const houseAPIURL = 'http://[::1]:3000/api/v1/houses';
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
