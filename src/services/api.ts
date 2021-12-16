import axios from 'axios';

const baseURL = 'api.openweathermap.org/data/2.5/weather';

export const api = axios.create({
  method: 'GET',
  baseURL,
  responseType: 'json'
});
