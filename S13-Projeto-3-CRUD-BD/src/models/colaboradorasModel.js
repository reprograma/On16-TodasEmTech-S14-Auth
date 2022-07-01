const mongoose = require ('mongoose')


const colaboadorasSchema = new mongoose.Schema({
    nome: {type: String},
    email: {type: String},
    senha: {type: String}

},
{
    versionKey: false
});

const Model = mongoose.model('colaboradoras', colaboadorasSchema)
module.exports = Model