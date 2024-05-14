import api from './api';

const servicoMei = {
  getAll: async () => {
    return api.get('/servicos');
  },
  getCategorias: async () => {
    return api.get('/servico/categoria');
  },
  getServicoByCategoria: async (id) => {
    return api.get('/servicos/categoria', { params: { id_categoria: id } });
  },
};

export default servicoMei;
