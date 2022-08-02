import React from 'react';
import { InputBase, NativeSelect, FormControl, Button } from '@mui/material';


export default function Select({mode, setMode}) {

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    }

  return (
    <div>
     <FormControl className='stile'>
    <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<InputBase />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        </FormControl>
        <Button>Start</Button>
    </div>
  )
}
