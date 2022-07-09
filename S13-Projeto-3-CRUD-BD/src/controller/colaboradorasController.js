const Colaboradoras = require("../models/colaboradorasModel");
const bcrypt = require("bcrypt"); // CRIPTOGRAFAR a senha
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

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
//.findOne é uma função usada para localizar o primeiro documento de acordo com a condição, neste caso aqui o email
const login = (req, res) => {
  Colaboradoras.findOne({ email: req.body.email }, function (error, colaboradora) {
    // foi usado uma exclamação para indicar não
      if (!colaboradora) {
          return res.status(404).send(`Não existe colaboradora com o email ${req.body.email}`);
      }
      // comparaçao direta da senha 
      const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha);
       // foi usado uma exclamação para indicar não
      if (!senhaValida) {
      /* 403 Forbidden é um código de resposta HTTP da classe de respostas de erro do cliente, a qual indica que o servidor recebeu a requisição e foi capaz de identificar o autor, porém não autorizou a emissão de um resposta. Os motivos para a proibição do acesso podem ser especificados no corpo da resposta.
      */
          return res.status(403).send('Criaturaaa que senha é essa hein?');
      }// jwt é um biblioteca JSON Web Token que transmite e armazena de forma compacta
      const token = jwt.sign({ email: req.body.email }, SECRET);// SECRET e usada para gerar o número do token
      return res.status(200).send(token);
  });

  
}

module.exports = {
  create,
  getAll,
  deleteById,
  login,
}





