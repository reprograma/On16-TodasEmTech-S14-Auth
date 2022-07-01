const Colaboradoras = require("../models/colaboradorasModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const createColab = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);

  req.body.senha = senhaComHash;

  const colaboradora = new Colaboradoras(req.body);
  colaboradora.save(function (err) {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.status(201).json(colaboradora);
  });
};

const getAll = (req, res) => {
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

    const message = `Collaborator with ID ${id} successfully deleted`;

    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const login = (req, res) => {
    Colaboradoras.findOne( {email: req.body.email}, function (err, colaboradora) {
        if(!colaboradora) {
            return res.status(404).send(`There is no collaborator with email: ${email}!`)
        }

        const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha)
        
        if(!senhaValida) {
            return res.status(403).send(`Invalid password!`)
        }
        
        //geração de token: jwt
        const token = jwt.sign({ email: req.body.email }, SECRET)
        res.status(200).send(token)
    })
}

module.exports = {
  createColab,
  getAll,
  deleteById,
  login
};

