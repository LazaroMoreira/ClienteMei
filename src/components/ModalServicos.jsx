import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Botao from './BotaoModal';

export default function DialogCadastrarServico({ buttonTitle }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ bgcolor: '#fff' }}
      >
        {buttonTitle}
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='sm'>
        <DialogTitle>Agendamento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escolha o serviço que deseja reservar
          </DialogContentText>
          <Botao />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
