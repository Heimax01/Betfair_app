import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.betfair.com/exchange/betting/rest/v1.0',
  headers: {
<<<<<<< HEAD
    
   'X-Application': 'C1l1lzS5QDKHsXqp',
   'Content-Type': 'application/json',
   'X-Authentication': '92i7ocKfGzh89M4KcimsWQ/obZIpAvbA+ybWSNcIFdE=',
   
 
 
}
  
=======
    post: {
      'Accept':'application/json',
      'Content-Type': 'application/json',
      'X-Application': 'C1l1lzS5QDKHsXqp',
      'X-Authentication': 'tyhvUoWpbjX/MRg1GSEx99ah6Sdggfb6HaWNHXiSe80=',
    }
    
   }
>>>>>>> cb57f8a23a89fddbc0d139f2840f37be09cac6d4
});

export default api;
