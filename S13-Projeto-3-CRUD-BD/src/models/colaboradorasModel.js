const mongoose = require('mongoose')

//estrutura do model

const colaboradorasSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    senha: { type: String }
}, {
     // gera padrão para cada atualização do documento
     versionKey: false
});

//atribuindo esquema a uma collection
// definir nome da collection que será salva no banco de dados

const colaboradoras = mongoose.model('colaboradoras', colaboradorasSchema);


//exportar o model

module.exports = colaboradoras;