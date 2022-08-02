import React, { useState }  from 'react';
import Alerts  from './components/Alerts';
import Select from './components/Select';
import Squares from './components/Squares';
import './App.css';

function App() {
  const [mode, setMode] = useState([]);
  const [squares, setSquares] = useState([]);
  return (
    <div className="App">
      <Select  mode={mode} setMode={setMode} />
      <Squares squares={squares} setSquares={setSquares} />
      <Alerts alerts={squares} />
    </div>
  );
}

export default App;
