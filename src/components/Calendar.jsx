import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ControlledComponent({ onDateChange }) {
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    onDateChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Data do Agendamento"
          value={value}
          onChange={handleChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
