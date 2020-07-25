import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.betfair.com/exchange/betting/rest/v1.0',
  headers: {
    
   'X-Application': 'C1l1lzS5QDKHsXqp',
   'Content-Type': 'application/json',
   'X-Authentication': '92i7ocKfGzh89M4KcimsWQ/obZIpAvbA+ybWSNcIFdE=',
   
 
 
}
  
});

export default api;
