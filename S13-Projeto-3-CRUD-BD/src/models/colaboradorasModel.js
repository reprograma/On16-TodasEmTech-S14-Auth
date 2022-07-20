// invocando mongoose
const mongoose = require("mongoose");

// schema 
const colaboradorasSchema = new mongoose.Schema({
    nome: {type: String},
    email: {type: String},
    senha: {type: String}
},
{
    versionKey: false
})

// guardo o model numa variavel
const colaboradoras = mongoose.model('colaboradoras', colaboradorasSchema)

// exportar
module.exports = colaboradoras