const Colaboradoras = require("../models/colaboradorasModel");
const bcrypt = require("bcrypt"); // CRIPTOGRAFAR a senha

const create = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = senhaComHash;

  const colaboradora = new Colaboradoras(req.body);
  // aqui é o retorno da solicitação do codigo para criar a nova colaboradora
  colaboradora.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message });
    }

    res.status(201).send(colaboradora.toJSON());
  });
};

const getAll = (req, res) => {
  Colaboradoras.find(function (err, colaboradoras) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send(colaboradoras);
  })
};

const deleteById = async (req, res) => {
  try {
      const { id } = req.params
      await Colaboradoras.findByIdAndDelete(id)
      const message = `A colaboradora com o ${id} foi deletada com sucesso!`
      res.status(200).json({ message })
  } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
  }
};





module.exports = {
  create,
  getAll,
  deleteById,

};
