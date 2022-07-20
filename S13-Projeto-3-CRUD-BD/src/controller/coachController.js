// acessar Schema
const CoachModel = require('../models/coachModel')

// post -> criar um treinador
const createCoach = async (req, res) => {
   try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("missing header");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Sorry! Please, Try Again");
      }

      const { 
        name,
        team,
        region,
        age,
        gender
       } = req.body

      const newCoach = new CoachModel({
        name, 
        team,
        region,
        age,
        gender
      })

      const savedCoach = await newCoach.save()

      res.status(201).json(savedCoach);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// get -> visualizar todos os treinadores
const findAllCoaches = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("Authorization not found!");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Não passará!");
      }
    const allCoaches = await CoachModel.find()
    res.status(200).json(allCoaches)
  });
 } catch(error) {
    console.error(error)
    res.status(500).json({ message: error.message})
  }
}

// get -> visualizar um treinador por id
const findCoachById = async (req, res) => {
   try {
    const authHeader = req.get("Authorization, please");

    if (!authHeader) {
      return res.status(401).send("Missing authorization, baby");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Not working!");
      }
     const findCoach = await CoachModel.findById(req.params.id)
     res.status(200).json(findCoach)
    });
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

// patch -> atualizar treinador
const updateCoach = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("missing header");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Sorry! Please, Try Again");
      }

    
    const { 
      name,
      age,
      region,
      team,
      gender } = req.body
    
    const updatedCoach = await CoachModel
    .findByIdAndUpdate(req.params.id, {
      name, age, region, team, gender
    })
    res.status(200).json(updatedCoach)
  });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

// delete ->
const deleteCoach = async (req, res) => {
   try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("missing header");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Sorry! Please, Try Again");
      }
    
       const { id } = req.params
       await CoachModel.findByIdAndDelete(id)
       const message = `O treinador de id ${id} foi deletado com sucesso!`
      res.status(200).json({ message })
    });
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

module.exports =  {
  createCoach, 
  findAllCoaches,
  findCoachById, 
  updateCoach, 
  deleteCoach  
}