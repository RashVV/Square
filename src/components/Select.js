import React from 'react';
import { InputBase, NativeSelect, FormControl, Button } from '@mui/material';


export default function Select({mode, setMode}) {

    const [value, setValue] = React.useState([]);
    const handleChange = (event) => {
      setValue(event.target.value);
    }

  return (
    <div>
     <FormControl className='stile'>
    <NativeSelect
          id="demo-customized-select-native"
          value={value.field}
          onChange={handleChange}
          input={<InputBase />}
        >
          {mode.map((value, index) => (
              <option key={index} value={value.field}>{value.name}</option>
              ))}
        </NativeSelect>
        </FormControl>
        <Button>Start</Button>
    </div>
  )
}
