const CoachModel = require('../models/coachModel')
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')

const createCoach = async (req, res) => {
    try {
      const authHeader = req.get('authorization')

      if(!authHeader){
        return res.status(401).send('Cade o header?')
      }

      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function (erro) {
        if (erro) {
          return res.status(403).send('Nope')
        }
      
        const { name, team, region, age, gender } = req.body

        const newCoach = new CoachModel({
          name, team, region, age, gender
        })
  
        const savedCoach = await newCoach.save()
  
        res.status(201).json(savedCoach)
      
      })
    } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
    }
}

const findAllCoaches = async (req, res) => {
  try {
    
    const authHeader = req.get('authorization')

    if(!authHeader){
      return res.status(401).send('Cade o header?')
    }

    const token = authHeader.split(' ')[1]

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Nope')
      }
     
      const allCoaches = await CoachModel.find()
      res.status(200).json(allCoaches)
    })
  } catch(error) {
    console.error(error)
    res.status(500).json({ message: error.message})
  }
}

const findCoachById = async (req, res) => {
   try {
     const authHeader = req.get('Authorization')
     if(!authHeader){
      return res.status(401).send('Cade o authorization?')
     }
     const token = authHeader.split(' ')[1]

     await jwt.verify(token, SECRET, async function (erro){
      if(erro){
        return res.status(403).send('Não vai rolar')
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

module.exports =  {
  createCoach, findAllCoaches, updateCoach, deleteCoach, findCoachById
}