import http from './http';

const getHouses = () => http.get('houses');

const bookHouse = {
  getHouses,

};

export default bookHouse;
