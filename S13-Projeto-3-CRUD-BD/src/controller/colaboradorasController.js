const Colaboradoras = require('../models/colaboradorasModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const create = (req, res) => {
    const senhaComHash = bcrypt.hashSinc(req.body.senha, 10)
    req.body.senha=senhaComHash
    const colaboradora = new Colaboradoras(req.body)
    colaboradora.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        console.log('meu resultado:')
        console.log(colaboradora)
        res.status(201).send(colaboradora)
    })
}
const getAll = (req, res) => {
    Colaboradoras.find(function(err, colaboradoras) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(colaboradoras)
    })
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params
        await Colaboradoras.findByIdAndDelete(id)
        const message = `A colaboradora com id ${id} foi deletada com sucesso!`
        res.status(200).json({ message }) 
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

//console.log('Minha secret:')
//console.log(SECRET)

const login = (req, res) => {
    Colaboradoras.findOne({ email: req.body.email }, function (error, colaboradora) {
        if (error) {
            return res.status(500).send({ message: 'Deu ruim' })
        }
        if (!colaboradora) {
            return res.status(404).send(`Não existe colaboradora com o email ${req.body.email}`)
        }
        const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha)

        if (!senhaValida) {
            return res.status(403).send ('que senha é essa?')
        }

        const token = jwt.sign({ email: req.body.email }, SECRET)
        return res.status(200).send(token)
    })
}

        

   


module.exports = {
    create,
    getAll,
    deleteById,
    login,
}
