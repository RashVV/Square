import React from 'react';
import { Select, FormControl, Button, InputLabel, Stack, MenuItem } from '@mui/material';
import '../App.css';

export default function Selector({mode, setMode, setSquares}) {

    const [playground, setPlayground] = React.useState("");

    const handleChange = (event) => {
      setPlayground(event.target.value);
      setSquares([]);
    }
    const handleStart = () => {
      setMode(playground);
    }


  return (
    <div className="Header">
    <Stack direction="row" spacing={1}>
     <FormControl variant="standard" >
      <InputLabel id='pick-mode-label'>Pick mood</InputLabel>
        <Select
          labelId="pick-mode-label"
          id="pick-mode"
          value={playground}
          label="Mode"
          onChange={handleChange}
          >
          {mode.map((value, index) => (
            <MenuItem  key={index} value={value.field}>{value.name}</MenuItem>))}
        </Select>
     </FormControl>
     <Button variant="contained" className="Button" style={{
    top:"15px", height:"42px"}} color="primary" onClick={handleStart}>Start</Button>
     </Stack>
    </div>
  )
}
