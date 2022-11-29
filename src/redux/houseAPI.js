export default class houseAPI {
  static fetchHouses = () => {
    const houseArr = [];
    const houseAPIURL = 'http://[::1]:3000/api/v1/houses';
    return fetch(houseAPIURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        Object.keys(json).forEach((id) => {
          houseArr.push({
            id,
            address: json[id][0].address,
            rooms: json[id][0].rooms,
            size: json[id][0].size,
            balcony: json[id][0].balcony,
            house_type: json[id][0].house_type,
            image: json[id][0].image,
          });
        });
        return houseArr;
      });
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
