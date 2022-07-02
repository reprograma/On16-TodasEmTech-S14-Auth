const CoachModel = require('../models/coachModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

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



const findAllCoaches = async (req, res) => {
  try {
   const authHeader = req.get('authorization') 
      if(!authHeader) { 
        return res.status(401).send('Cadê a autorização do rolê???')
      }
      const token = authHeader.split(' ')[1] 

      jwt.verify(token, SECRET, async function (erro) {

      if (erro) {
        return res.status(403).json('Não rolou!')
      }


      const allCoaches = await CoachModel.find()
      res.status(200).json(allCoaches)
    })
      
  } catch(error) {
        console.error(error)
        res.status(500).send({ message: error.message})
  }
}



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