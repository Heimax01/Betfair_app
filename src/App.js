import React, {useEffect} from 'react';
import axios from 'axios';
// import api from './services/api';

function App() {

  useEffect(() => {

      


    const listData =  async () => {

      try {

        const data = {
          filter: {}
          //eventTypeIds:["1"],marketCountries:["FI"]
        };

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'X-Application': 'C1l1lzS5QDKHsXqp',
            'X-Authentication': '92i7ocKfGzh89M4KcimsWQ/obZIpAvbA+ybWSNcIFdE=',
          }
        };             


      const response = await axios.post('https://api.betfair.com/exchange/betting/rest/v1.0/listEventTypes',data, config)

      console.log(`Status: ${response.status}`);
      console.log(`Content Type: ${response.headers['Content-Type']}`);
      console.log(`X-Application: ${response.headers['X-Application']}`);
      console.log(`X-Authentication: ${response.headers['X-Authentication']}`);          
      

      

        
    }  catch (err) {
    console.error(err);
  }}
   
    listData()
    

      
    

    
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default App;
