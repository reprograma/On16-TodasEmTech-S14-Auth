
// post -> criar um treinador
// get -> visualizar todos os treinadores
// get -> visualizar um treinador por id
// patch -> 
// delete ->

/**
 * 
 * const { name, age, team } = req.body
 * const age = req.body.age
 * const name = req.body.name
 * const team = req.body.team
 */
const CoachModel = require('../models/coachModel')
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const createCoach = async (req, res) => {
  try {
    const { name, team, region, age, gender } = req.body

    const newCoach = new CoachModel({
      name, team, region, age, gender
    })

    const savedCoach = await newCoach.save()

    res.status(201).json(savedCoach)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const findAllCoaches = async (req, res) => {
  try {
    const authHeader = req.get('authorization'); // header de autorização
    if (!authHeader) {// enviar 401 quando vazio
      return res.status(401).send('onde está o header')
    }
    const token = authHeader.split(' ')[1];// reservar token em variável

    await jwt.verify(token, SECRET, async function (erro) {//lib para verificar se o token é válido

      if (erro) {// se for inválido, retorna 403
        /* 403 Forbidden é um código de resposta HTTP da classe de respostas de erro do cliente, a qual indica que o servidor recebeu a requisição e foi capaz de identificar o autor, porém não autorizou a emissão de um resposta. Os motivos para a proibição do acesso podem ser especificados no corpo da resposta.
         */
        return res.status(403).send('Não');
      }
      // se as informações estiverem corretas, retorna os treinadores
      const allCoaches = await CoachModel.find()
      res.status(200).json(allCoaches)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const findCoachById = async (req, res) => {
  try {
    const findCoach = await CoachModel.findById(req.params.id)
    res.status(200).json(findCoach)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const updateCoach = async (req, res) => {
  try {
    const { name, age, region, team, gender } = req.body
    const updatedCoach = await CoachModel
      .findByIdAndUpdate(req.params.id, {
        name, age, region, team, gender
      })
    res.status(200).json(updatedCoach)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteCoach = async (req, res) => {
  try {
    const { id } = req.params
    await CoachModel.findByIdAndDelete(id)
    const message = `O treinador com o ${id} foi deletado com sucesso!`
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
  createCoach, findAllCoaches, updateCoach, deleteCoach, findCoachById
}