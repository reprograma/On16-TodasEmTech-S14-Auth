
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
const jwt = require('jsonwebtoken'); // carrega lib jwt
const SECRET = process.env.SECRET //carrega secret do arquivo de env


const createCoach = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você precisa de uma autorização.");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado.");
      }
      const allCoaches = await CoachModel.find();
      res.status(200).json(allCoaches);
    });
    const { name, team, region, age, gender } = req.body;
    const newCoach = new CoachModel({
      name,
      team,
      region,
      age,
      gender,
    });
    const savedCoach = await newCoach.save();
    res.status(201).json(savedCoach);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findAllCoaches = async (req, res) => {
  try {
    const authHeader = req.get('authorization'); // pega o header de autorização

    if (!authHeader) { // envia uma mensagem de erro 401 quando vier vazio
      return res.status(401).send('Kd os header parça');
    }

    const token = authHeader.split(' ')[1]; //reserva o token em uma variavel

    await jwt.verify(token, SECRET, async function (erro) { //utiliza a lib jwt para verificar se o token é valido

      if (erro) { // se for inválido retorna 403
      /* 403 Forbidden é um código de resposta HTTP da classe de respostas de erro do cliente, a qual indica que o servidor recebeu a requisição e foi capaz de identificar o autor, porém não autorizou a emissão de um resposta. Os motivos para a proibição do acesso podem ser especificados no corpo da resposta.
      */
        return res.status(403).send('Nope');
      }
      // se estiver tudo certo retorna os treinadores
      const allCoaches = await CoachModel.find()
      res.status(200).send(allCoaches)

    })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
}



const findCoachById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você precisa de uma autorização.");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado.");
      }
      const findCoach = await CoachModel.findById(req.params.id);
      res.status(200).json(findCoach);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateCoach = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você precisa de uma autorização.");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado.");
      }
      const { name, age, region, team, gender } = req.body;
      const updateCoach = await CoachModel.findByIdAndUpdate(req.params.id, {
        name,
        age,
        region,
        team,
        gender,
      });

      res.status(200).json(updateCoach);
    });
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteCoach = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você precisa de uma autorização.");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado.");
      }
      const { id } = req.params;
      const deleteCoach = await CoachModel.findByIdAndDelete(id);
      const message = `O treinador com id ${deleteCoach.name} foi excluído com sucesso`;
      res.status(200).json({ message });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports =  {
  createCoach, findAllCoaches, updateCoach, deleteCoach, findCoachById
}

