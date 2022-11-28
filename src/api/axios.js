import axios from 'axios';
import { API_URL, USERNAME } from './config';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', name: USERNAME },
});

export default instance;
