const Colaboradoras = require("../models/colaboradorasModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const createColaboradora = (req, res) => {
  try {
    const hashPass = bcrypt.hashSync(req.body.senha, 10);

    req.body.senha = hashPass;

    const colaboradora = new Colaboradoras(req.body);
    colaboradora.save(function (err) {
      if (error) {
        res.status(500).send({ message: err.message });
      }
      res.status(201).send(colaboradora);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getColaboradoras = (req, res) => {
  Colaboradoras.find(function (err, colaboradoras) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(200).send(colaboradoras);
  });
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    await Colaboradoras.findByIdAndDelete(id);

    const message = `Colaboradora de ID ${id} deleteda`;

    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const login = (req, res) => {
    Colaboradoras.findOne( {email: req.body.email}, function (err, colaboradora) {
        if(!colaboradora) {
            return res.status(404).send(`Esse email não está cadastrado`)
        }

        const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha)

        if(!senhaValida) {
            return res.status(403).send(`Senha Incorreta`)
        }

        //gerando token
        const token = jwt.sign({ email: req.body.email }, SECRET)
        res.status(200).send(token)
    })
}

module.exports = {
  createColaboradora,
  getColaboradoras,
  deleteById,
  login
};
