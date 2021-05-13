import React, {useState} from 'react';
import './App.css';
import './ProgressBar';
import ProgressBar from './ProgressBar.js';

function App() {
  const [percent, setPercent] = useState(0)

  return (
    <div className="App">
      <ProgressBar value={percent}/>
      <input className="percentage-input"
             type="number" 
             placeholder="Enter percentage..."
             value={percent}
             onChange={(event) => setPercent(event.target.value)}
             />
    </div>
  );
}

export default App;
