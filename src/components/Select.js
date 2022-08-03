import React from 'react';
import { NativeSelect, FormControl, Button, InputLabel, Stack } from '@mui/material';
import '../App.css';

export default function Select({mode, setMode}) {

    const [value, setValue] = React.useState([]);
    const handleChange = (event) => {
      setValue(event.target.value);
      setMode(event.target.value);
    }

  return (
    <div className="Header">
    <Stack direction="row" spacing={1}>
     <FormControl variant="standard" >
      <InputLabel id="label" >Pick mode</InputLabel>
        <NativeSelect
          id="selector"
          value={value.field}
          onChange={handleChange}
          >
         <option aria-label="None" value="" />
          {mode.map((value, index) => (
              <option key={index} value={value.field}>{value.name}</option>))}
        </NativeSelect>
     </FormControl>
     <Button variant="contained" className="Button" style={{
    top:"15px", height:"42px"}} color="primary">Start</Button>
     </Stack>
    </div>
  )
}
