import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <Button
      variant="outlined"
      onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}
    >
      Confirmar
    </Button>
  );

  return (
    <Box>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Agendamento realizado com sucesso!"
        key={vertical + horizontal}
      />
    </Box>
  );
}
