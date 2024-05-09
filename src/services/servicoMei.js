import api from './api'

const servicoMei = {
    getAll: ()=>{
        api.get('/servicos')
    }
}

export default servicoMei