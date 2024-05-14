import api from './api';

const agendamento = {
  createAgendamento: (form) => {
    return api.post('/agendamento/create', form);
  },
};

export default agendamento;
