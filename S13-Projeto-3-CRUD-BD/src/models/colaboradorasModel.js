//Importação
const mongoose = require('mongoose')

//modelo
const colaboradorasSchema = new mongoose.Schema({ 
    nome: { type: String },
    email: { type: String },
    senha: { type: String },
},
    {
        versionKey: false //gera por padrão uma versão para cada atualização do documento
    }
)

//Atribuindo o Schema a uma colletion. O nome da collection é o nome da const abaixo
const colaboradoras = mongoose.model('colaboradoras', colaboradorasSchema)

//exportações
module.exports = colaboradoras