import React, {useEffect} from 'react';
import api from './services/api';

function App() {

  useEffect(() => {

      


    const listData =  async () => {
<<<<<<< HEAD
       const response = await api.post('/listEventTypes',{
        filter: {}
        //eventTypeIds:["1"],marketCountries:["FI"]
=======
       const response = await api.post('/listEvents',{
        filter: {eventTypeIds:["1"],marketCountries:["FI"]}
>>>>>>> cb57f8a23a89fddbc0d139f2840f37be09cac6d4
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
