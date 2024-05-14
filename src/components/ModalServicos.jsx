import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Calendar from './Calendar';
import DialogForm from './DialogForm';
import Accordion from './Accordion';

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
        sx={{ bgcolor: '#fff', padding: 1 }}
      >
        {buttonTitle}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agendamento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escolha o serviço que deseja reservar
          </DialogContentText>
          <Accordion />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
          <DialogForm buttonTitle="Cadastrar Dados" />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
