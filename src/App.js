import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
 
  const increase = () => {
    setCount(count + 1);
  }
  const zero = () => {
    setCount(count = 0);
  }
  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={zero}>Set Zero</button>
      <button onClick={decrease}>Decrease</button>
      <h1>{count}</h1>
    </div>
  );
}


export default App;
