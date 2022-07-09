const mongoose = require('mongoose')

const colaboradorasSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    senha: { type: String },
  },
  {
    versionKey: false
  }); // controle de versão, tem que ser no formato json
// definir a collection para acessar o banco 
const colaboradoras = mongoose.model('colaboradoras', colaboradorasSchema);
// exportando
module.exports = colaboradoras;

// versionKey como false, porque toda vez que atualizar a versão com algum dado dentro  constante colaboradorasSchema o versionkey entenderá que será uma versão nova e neste caso e melhor deixar false.
