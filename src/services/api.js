import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.betfair.com/exchange/betting/rest/v1.0',
});

export default api;
