import React from 'react';
import Alert from '@mui/material/Alert';
import '../App.css';


export default function Alerts({alerts}) {
  return (
  <div className="Alerts">
  <h1>Hover Squares</h1>
  <Alert severity="warning">
  This is a warning alert — check it out!
  </Alert>
  </div>
  )
}

