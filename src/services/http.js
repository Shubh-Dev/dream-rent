import axios from 'axios';
import { API_URL } from '../api/config';

export default axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-type': 'application/json',
  },

});
