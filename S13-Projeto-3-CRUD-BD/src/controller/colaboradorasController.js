const Colaboradoras = require('../models/colaboradorasModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET


const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
    req.body.senha = senhaComHash
    const colaboradora = new Colaboradoras(req.body);

    colaboradora.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(201).send(colaboradora)
    })
}


const getAll = (req, res) => {
    Colaboradoras.find(function (err, colaboradoras) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(colaboradoras);
    })
}


const deleteById = async (req, res) => {
    try {
        const { id } = req.params
        await Colaboradoras.findByIdAndDelete(id)
        const message = `A colaboradora com ${id} foi deletado com sucesso!`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


const login = (req, res) => {
    Colaboradoras.findOne({ email: req.body.email }, function (error, colaboradora) {
        if (!colaboradora) {
            return res.status(404).send(`Não existe colaboradora com este email ${req.body.email}`);
        }
        const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha);

        if (!senhaValida) {
            /* 403 Forbidden é um código de resposta HTTP da classe de respostas de erro do cliente, a qual indica que o servidor recebeu a requisição e foi capaz de identificar o autor, porém não autorizou a emissão de um resposta. Os motivos para a proibição do acesso podem ser especificados no corpo da resposta.
        */
            return res.status(403).send('senha incorreta');
        }
        const token = jwt.sign({ email: req.body.email }, SECRET);
        return res.status(200).send(token);
    });
}

module.exports = {
    create,
    getAll,
    deleteById,
    login,
}
