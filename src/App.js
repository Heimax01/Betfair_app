import React, {useEffect} from 'react';
import api from './services/api';

function App() {

  useEffect(() => {

      


    const listData =  async () => {
       const response = await api.post('/listEvents',{
        filter: {eventTypeIds:["1"],marketCountries:["FI"]}
      })

      console.log(response.data)
    }
   
    listData()
    

      
    

    
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default App;
