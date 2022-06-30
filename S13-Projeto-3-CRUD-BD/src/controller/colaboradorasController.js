//Importações
const Colaboradoras = require('../models/colaboradorasModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10) //função hasheadora da senha
    req.body.senha = senhaComHash //substitui no body senha real por senha hasheada
    const colaboradora = new Colaboradoras(req.body)
    //função de salvamento
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
        res.status(200).send(colaboradoras)
    })
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params
        await Colaboradoras.findByIdAndDelete(id) //irá esperar essa linha executar para então passar para a próxima
        const message = `A colaboradora com o ID ${id} foi deletada com sucesso!`
        res.status(200).json({ message }) //só é possível fazer assim, sem por o igual e a frase, prq está se usando o mesmo nome de variável da linha anterior
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }

}

const login = (req, res) => { //para login vou precisar passar email e senha no body da solicitação
    Colaboradoras.findOne({ email: req.body.email }, function (error, colaboradora){
        if (!colaboradora) {
            return res.status(400).send(`Não existe colaboradora com o email ${req.body.email}`)
        }
        const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha)
        if (!senhaValida) {
            return res.status(403).send('Senha incorreta')
        }
        const token = jwt.sign({ email: req.body.email }, SECRET)
        return res.status(200).send(token)
    })
}

module.exports = {
    create,
    getAll,
    deleteById,
    login
}