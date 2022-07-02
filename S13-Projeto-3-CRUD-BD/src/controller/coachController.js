const CoachModel = require('../models/coachModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

// post -> criar um treinador
//protegendo a rota com autenticação
const createCoach = async (req, res) => {
   try {

     const authHeader = req.get('authorization')
      if(!authHeader) {
        res.status(401).send('Você precisa de autorização, bebê!')
      }

      const token = authHeader.split(' ')[1]
      
      await jwt.verify(token, SECRET, async function (erro) {
       if (err) {
        res.status(403).json('Não foi dessa vez sem a autorização!')
       }  
      })
      
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


//GET - todos os treinadores
// ROTA GET protegida
const findAllCoaches = async (req, res) => {
  try {
   //para proteger a rota 
   const authHeader = req.get('authorization') //autorização passada no postman
      if(!authHeader) { // envia uma mensagem de erro 401 quando vier vazio
        return res.status(401).send('Cadê a autorização do rolê???')
      }
      //token criado após o authheader
      const token = authHeader.split(' ')[1] //reserva o token em uma variavel

      await jwt.verify(token, SECRET, async function (erro) { //utiliza a lib jwt para verificar se o token é valido

        if (erro) { // se for inválido retorna 403
          // 403 Forbidden é um código de resposta HTTP da classe de respostas de erro do cliente, a qual indica que o servidor recebeu a requisição e foi capaz de identificar o autor, porém não autorizou a emissão de um resposta. Os motivos para a proibição do acesso podem ser especificados no corpo da resposta.
      
          return res.status(403).json('Não rolou!')
        }
    
      //se estiver correto, retorna os treinadores
        //até aqui...excluuir depois
        const allCoaches = await CoachModel.find()
            res.status(200).json(allCoaches)
      })
      
  } catch(error) {
        console.error(error)
        res.status(500).send({ message: error.message})
  }
}


/* const findAllCoaches = async (req, res) => {
  try {

    const allCoaches = await CoachModel.find()
    res.status(200).json(allCoaches)
  } catch(error) {
    console.error(error)
    res.status(500).json({ message: error.message})
  }
} */

// GET -> busca treinador por id
const findCoachById = async (req, res) => {
   try {
     
    const authHeader = req.get('authorization')  
      if(!authHeader) {
        return res.status(401).send('Você precisa de autorização para esse acesso!')
      } 
      
      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function (erro) {
       
        if (err) {
          return res.status(403).json('Sem a autorização não vai ter como ter esse acesso.')
       } 

       const findCoach = await CoachModel.findById(req.params.id)
      res.status(200).json(findCoach)
      })
    
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

// PATCH -> altera
const updateCoach = async (req, res) => {
  try {

    const authHeader = req.get('authorization')
      if(!authHeader) {
        return res.status(401).send('Você não tem autorização para isso!')
      }

      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function (erro) {

          if (erro) {
            return res.status(403).json('Não vai rolar sem a autorização.')
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

// DELETE
const deleteCoach = async (req, res) => {
   try {

    const authHeader = req.get('authorization')
      if(!authHeader) {
        return res.status(401).send('Você precisa de uma autorização pra ter esse acesso.')
      }

      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function (erro) {
        
        if (erro) {
          return res.status(403).json('Não deu certo!')
        }
          
      })
       
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

module.exports =  {
  createCoach, findAllCoaches, updateCoach, deleteCoach, findCoachById
}