import React, {useEffect} from 'react';
import api from './services/api';

function App() {

  useEffect(() => {

      const requestFilters = '{"filter":{}}';

      api.post('/listEventTypes',{}, {headers: {
         'Content-Type': 'application/json',
         'X-Application': 'C1l1lzS5QDKHsXqp',
         'X-Authentication' : 'tyhvUoWpbjX/MRg1GSEx99ah6Sdggfb6HaWNHXiSe80=',
       }}).then(response => {
        console.log(response.data);
      });
      
    

    
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default App;
