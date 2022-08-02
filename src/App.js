import React, { useState, useEffect }  from 'react';
import Alerts  from './components/Alerts';
import Select from './components/Select';
import Squares from './components/Squares';
import './App.css';

function App() {
  const [mode, setMode] = useState([]);
  const [squares, setSquares] = useState([]);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
   const getData = async () => {
    try {
      const response = await fetch(
        'http://demo7919674.mockable.io'
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setData(actualData);
      setError(null);
    } catch(err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  getData()
 }, []);
 console.log('Error:', error);
 console.log('Mode:', mode);
 console.log('Loading:', loading);

  return (
    <div className="App">
      <Select  mode={data} setMode={setMode} />
      <div className='Field'>
       <Squares squares={squares} setSquares={setSquares} />
       <Alerts alerts={squares} />
      </div>
    </div>
  );
}

export default App;
