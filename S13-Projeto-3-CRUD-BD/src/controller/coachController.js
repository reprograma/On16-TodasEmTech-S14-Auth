const CoachModel = require("../models/coachModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


//criar novo Treinador
const createCoach = async (req, res) => {
  try {
    
    const authHeader = req.get('authorization')
      if(!authHeader) {
        res.status(401).send('Aqui somente com autorização')
      }

      const token = authHeader.split(' ')[1]
      
      await jwt.verify(token, SECRET, async function (erro) {
       if (err) {
        res.status(403).json('Retorne com uma autorização para prosseguir')
       }  
      })
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


//Criar método de autenticação em findAllCoaches:
const findAllCoaches = async (req, res) => {
  try {
    const authHeader = req.get('authorization'); // pega o header de autorização
// exclamação significa (nao tiver autorização)
    if (!authHeader) { // envia uma mensagem de erro 401 quando vier vazio
      return res.status(401).send('Não inseriu o token, não está autorizado');
    }
//nao esquecer de colocar espaço entre as aspas apos o .split
    const token = authHeader.split(' ')[1]; //reserva o token em uma variavel, lembrando que o array inicia a contar a posição a partir  do zero e foi inserido o n 1 para pegar a posição a partir do 1

    await jwt.verify(token, SECRET, async function (erro) { //utiliza a lib jwt para verificar se o token é valido. a SECRET e a chave para trabalhar com este token, todo await acompanha async

      if (erro) { // se for inválido retorna 403
      /* 403 Forbidden é um código de resposta HTTP da classe de respostas de erro do cliente, a qual indica que o servidor recebeu a requisição e foi capaz de identificar o autor, porém não autorizou a emissão de um resposta. Os motivos para a proibição do acesso podem ser especificados no corpo da resposta.
      */
        return res.status(403).send('não está válido');
      }
      // se estiver tudo certo retorna os treinadores
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
    
   const authHeader = req.get('authorization')  
     if(!authHeader) {
       return res.status(401).send('Não inseriu o token, não está autorizado')
     } 
     
     const token = authHeader.split(' ')[1]

     await jwt.verify(token, SECRET, async function (erro) {
      
       if (err) {
         return res.status(403).json('Sem a autorização não podemos prosseguir.')
      } 

      const findCoach = await CoachModel.findById(req.params.id)
     res.status(200).json(findCoach)
     })
   
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const updateCoach = async (req, res) => {
  try {

    const authHeader = req.get('authorization')
      if(!authHeader) {
        return res.status(401).send('Faltou autorização.')
      }

      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function (erro) {

          if (erro) {
            return res.status(403).json('Para continuar apresente uma autorização.')
          }
          const { name, age, region, team, gender } = req.body
          const updatedCoach = await CoachModel.findByIdAndUpdate(req.params.id, { name, age, region, team, gender})
            return res.status(200).json(updateCoach)
      })
    
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  } 
}
const deleteCoach = async (req, res) => {
  try {

   const authHeader = req.get('authorization')
     if(!authHeader) {
       return res.status(401).send('Necessita de uma autorização para acessar.')
     }

     const token = authHeader.split(' ')[1]

     await jwt.verify(token, SECRET, async function (erro) {
       
       if (erro) {
         return res.status(403).json('é esperado uma autorização')
       }
         
     })
      
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

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
  createCoach,
  findAllCoaches,
  updateCoach,
  deleteCoach,
  findCoachById,
  
};
