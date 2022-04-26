import {useState} from 'react';

export function App() {
  const [color, setColor] = useState('red');
  const newButtonColor = color === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <button 
      style={{backgroundColor: color}} 
      onClick={() => setColor(newButtonColor)} 
      > 
        Change to {newButtonColor}
      </button>
    </div>
  );
}
