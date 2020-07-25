import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.betfair.com/exchange/betting/rest/v1.0',
  headers: {
    post: {
      'Accept':'application/json',
      'Content-Type': 'application/json',
      'X-Application': 'C1l1lzS5QDKHsXqp',
      'X-Authentication': 'tyhvUoWpbjX/MRg1GSEx99ah6Sdggfb6HaWNHXiSe80=',
    }
    
   }
});

export default api;
