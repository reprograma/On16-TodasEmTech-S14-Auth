const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    nome: { type: String},
    email: { type: String },
    senha: { type: String },
},
{
    versionKey: false
});

const users = mongoose.model('users', usersSchema);

module.exports = users 