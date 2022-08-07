import React from 'react';
import { Select, FormControl, Button, InputLabel, Stack, MenuItem } from '@mui/material';
import '../App.css';

export default function Selector({mode, setMode, setSquares, setRows}) {
  const [playground, setPlayground] = React.useState("");
    const handleChange = (event) => {
      setPlayground(event.target.value);
      setRows([]);
      setSquares([]);
    }
    const handleStart = () => {
      setMode(playground);
      setSquares([]);
      setRows([]);
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
        <Button variant="contained" className="Button"  color="primary" onClick={handleStart}>Start</Button>
      </Stack>
    </div>
  )
}
