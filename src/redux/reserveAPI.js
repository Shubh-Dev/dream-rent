/* eslint-disable camelcase */
export default class ReserveAPI {
  static fetchReserves = async () => {
    const reserveAPIURL = 'https://dream-rent-api-production.up.railway.app/api/v1/appointments/';
    const response = await fetch(reserveAPIURL);
    const data = await response.json();
    return data;
  };

  static addReserve = async ({
    date, time, visitors, user_id, house_id,
  }) => {
    const reserveAPIURL = 'https://dream-rent-api-production.up.railway.app/api/v1/appointments/';
    const res = await fetch(reserveAPIURL, {
      method: 'POST',
      body: JSON.stringify({
        // id,
        date,
        time,
        visitors,
        user_id,
        house_id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return res.json();
  }
}
