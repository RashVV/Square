import React, { useState, useEffect }  from 'react';
import Alerts  from './components/Alerts';
import Selector from './components/Selector';
import Squares from './components/Squares';
import './App.css';

function App() {
  const [mode, setMode] = useState();
  const [squares, setSquares] = useState([]);
  const [data, setData] = useState([])
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  const [rows, setRows] = useState([]);

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

  return (
    <div className="App">
      <Selector  mode={data} setMode={setMode} setSquares={setSquares} setRows={setRows} />
      <div className='Field'>
        {mode && (
          <>
            <Squares squares={squares} mode={mode} setSquares={setSquares} setRows={setRows} rows={rows} />
            <Alerts alerts={squares} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
