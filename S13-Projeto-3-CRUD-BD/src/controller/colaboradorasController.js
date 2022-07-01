const Colaboradoras = require('../models/colaboradorasModel')


const create = (req, res) =>{
    console.log('Entrei na função')
    console.log(req.body)
   const colaboradora = new Colaboradoras(req.body)
   colaboradora.save(function (err){
    if (err){
        res.status(500).send({message: err.message})
    }
    res.status(201).send(colaboradora.toJson)
    })
}

module.exports = {
    create
}