import React, {useState} from 'react'
import './App.css';

const App = () => {
  const [clicker, setClicker] = useState('');



  const addCount = () => {
    setClicker(clicker+1)
  }

  const removeCount = () => {
    setClicker(clicker-1)
  }
  return (
    <div className="App">
      <button onClick ={()=>addCount()}>+</button>
        {clicker}
      <button onClick={()=>removeCount()}>-</button>
    </div>
  );
}

export default App;
