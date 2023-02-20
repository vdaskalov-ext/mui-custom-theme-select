import {
  ThemeProvider,
  createTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';

const theme = createTheme({
  components: {
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        icon: ({ ownerState }) => {
          console.log(ownerState);
          console.log(ownerState?.error);
          return {
            color: 'red',
          };
        },
      },
    },
  },
});

export default function App() {
  const [age, setAge] = useState(20);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={(event) => {
              const age = Number(event.target.value);
              setAge(age);
            }}
            disabled={false}
            error={true}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}
