const moongose = require("mongoose")

const colaboradorasSchema = new moongose.Schema({
    nome: {type: String},
    email: {type: String},
    senha: {type: String}
    },
    {
        versionKey: false
    })

    const colaboradoras = moongose.model('colaboradoras', colaboradorasSchema)

    module.exports = colaboradoras