import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <FormControl sx={{ m: 1, minWidth: 100}} size="small">
        <InputLabel id="demo-simple-select-label">Année</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>2022</MenuItem>
          <MenuItem value={20}>2023</MenuItem>
          <MenuItem value={30}>2024</MenuItem>
        </Select>
      </FormControl>
  );
}
