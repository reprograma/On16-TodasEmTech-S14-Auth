const mongoose = require('mongoose')

const colabSchema = new mongoose.Schema({
    nome: {type: String},
    email: {type: String},
    senha: {type: String}
},
{
    versionKey: false
});

const colaboradoras = mongoose.model('colaboradoras', colabSchema);

module.exports = colaboradoras