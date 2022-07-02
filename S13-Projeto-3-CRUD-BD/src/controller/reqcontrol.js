const Colaboradoras = require('../models/colaboradorasModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


// Post
const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
    req.body.senha = senhaComHash;
    const colaboradora = new Colaboradoras(req.body);

    colaboradora.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(201).send(colaboradora)
    })
};

// GET all - listar todos 
const getAll = (req, res) => {
    Colaboradoras.find(function (err, colaboradoras) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(colaboradoras)
    })
}


// DELETE
const deleteById = async (req, res) => {
    try{
       const { id } = req.params
    await Colaboradoras.findByIdAndDelete(id)
    const message = ` ${id}  deletada`
    res.status(200).json({ message}) 
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const login = (req, res) => {
    console.log(('Pessoal:'))
    Colaboradoras.findOne({ email: req.body.email }, function (error, colaboradora) {
        if (!colaboradora) {
            return res.status(404).send(`Não encontrado ${req.body.email}`);
        }

        const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha);

        if (!senhaValida) {
   
            return res.status(403).send('Tente novamente');
        }
        const token = jwt.sign({ email: req.body.email }, SECRET);
        return res.status(200).send(token);
    });
}

module.exports = {
    create, 
    getAll,
    deleteById,
    login
}