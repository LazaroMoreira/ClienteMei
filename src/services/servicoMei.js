import api from './api'

const servicoMei = {
    getAll: async ()=>{
        api.get('/servicos')
    }
}

export default servicoMei