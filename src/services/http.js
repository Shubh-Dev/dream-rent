import axios from 'axios';

export default axios.create({
  baseURL: 'https://dream-rent-api-production.up.railway.app/api/v1/',
  headers: {
    'Content-type': 'application/json',
  },

});
