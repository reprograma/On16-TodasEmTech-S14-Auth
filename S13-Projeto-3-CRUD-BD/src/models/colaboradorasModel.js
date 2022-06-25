const mongoose = require("mongoose")

const colaboradorasSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
       },
    nome: {type: String},
    email: {type: String},
    senha: {type: String}
}, { versionKey: false    
})

const colaboradoras = mongoose.model('colaboradoras', colaboradorasSchema)

module.exports = colaboradoras