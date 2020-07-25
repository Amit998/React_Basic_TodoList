import React,{ useState} from 'react';

function App(){
  const [todos,setTodods] = useState([
    {
      text:'Learn About React',
      isComplete: false
    },
  ]);
}

export default App;