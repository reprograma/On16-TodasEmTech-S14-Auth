const mongoose = require('mongoose')

const colaboradorasSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    senha: { type: String },
},
{
    versionKey: false
});

const colaboradoras = mongoose.model('colaboradoras', colaboradorasSchema);

module.exports = colaboradoras