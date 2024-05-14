import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Calendar from './Calendar';
import agendamento from '../services/agendamento';
import { useState } from 'react';

export default function DialogAgendamento({ buttonTitle, id_servico }) {
  const [open, setOpen] = React.useState(false);
  const [dataSelecionada, setDataSelecionanda] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setDataSelecionanda(date);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const dateString = dataSelecionada.$d.toISOString().split('T')[0];
            const form = {
              nome: data.get('nome'),
              email: data.get('email'),
              telefone: data.get('telefone'),
              data: dateString,
              id_servico,
            };
            console.log(form);

            agendamento
              .createAgendamento(form)
              .then((res) => {
                console.log(res.data);
                // if (res.data) {
                //   window.location.href = '/servicos';
                // }
              })
              .catch(() => alert('Erro ao cadastrar serviço'));

            handleClose();
          },
        }}
      >
        <DialogTitle>Agendamento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Digite seus dados para solicitar o agendamento
          </DialogContentText>
          <Calendar onDateChange={handleDateChange} />
          <TextField
            autoFocus
            required
            margin="dense"
            id="nome"
            name="nome"
            label="Nome"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="E-mail"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="telefone"
            name="telefone"
            label="WhatsApp"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
          <Button type="submit">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
