/* eslint-disable camelcase */
export default class ReserveAPI {
  static fetchReserves = async () => {
    const reserveAPIURL = 'http://[::1]:3000/api/v1/appointments/';
    const response = await fetch(reserveAPIURL);
    const data = await response.json();
    return data;
  };

  static addReserve = async ({
    id, date, time, user_id, house_id, visitors,
  }) => {
    const reserveAPIURL = 'http://[::1]:3000/api/v1/appointments/';
    const res = await fetch(reserveAPIURL, {
      method: 'POST',
      body: JSON.stringify({
        id,
        date,
        time,
        user_id,
        house_id,
        visitors,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return res.json();
  }
}
