import React from 'react';
import Alert from '@mui/material/Alert';
import '../App.css';

export default function Alerts({alerts}) {
return (
  <div className="Alerts">
    <h1>Hover Squares</h1>
    {alerts.map(({row, col, isActive}) => (
      <>
      {!isActive && (
        <Alert key={alerts.id} icon={false} severity="warning">
        {`row ${row} col ${col}`}
        </Alert>
        )}
      </>
    ))}
  </div>
  )
}
