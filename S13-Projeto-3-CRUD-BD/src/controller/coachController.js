const CoachModel = require('../models/coachModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const createCoach = async (req, res) => {
  try {
    const authHeader = req.get('autorization')
    if (!authHeader) {
      return res.status(401).send("Cade autorization?")
    }
    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("não vai rolar")
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
    const authHeader = req.get('autorization')
    if (!authHeader) {
      return res.status(401).send("Cade autorization?")
    }
    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("não vai rolar")
      }
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
    const authHeader = req.get('autorization')
    if (!authHeader) {
      return res.status(401).send("Cade autorization?")
    }
    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("não vai rolar")
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
    const authHeader = req.get('autorization')
    if (!authHeader) {
      return res.status(401).send("Cade autorization?")
    }
    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("não vai rolar")
      }
      const { name, age, region, team, gender } = req.body
      const updatedCoach = await CoachModel
        .findByIdAndUpdate(req.params.id, {
          name, age, region, team, gender
        })
      res.status(200).json(updatedCoach)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteCoach = async (req, res) => {
  try {
    const authHeader = req.get('autorization')
    if (!authHeader) {
      return res.status(401).send("Cade autorization?")
    }
    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("não vai rolar")
      }
      const { id } = req.params
      await CoachModel.findByIdAndDelete(id)
      const message = `O treinador com o ${id} foi deletado com
sucesso!`
      res.status(200).json({ message })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}


module.exports = {
  createCoach, 
  findAllCoaches, 
  updateCoach, 
  deleteCoach, 
  findCoachById
}