import {useState} from 'react';

export function Button() {
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
      <input type="checkbox" />
    </div>
  );
}
