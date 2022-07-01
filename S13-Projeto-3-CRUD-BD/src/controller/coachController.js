const CoachModel = require("../models/coachModel.js");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

// post -> create new coach

const createCoach = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("Cade o header?");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Nope");
      }

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
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// get -> all coaches

const findAllCoaches = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("Missing authorization!");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Not working!");
      }

      const allCoaches = await CoachModel.find();
      res.status(200).json(allCoaches);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// get -> coach by id

const findCoachById = async (req, res) => {
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      return res.status(401).send("Missing authorization");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Not working!");
      }

      const findCoach = await CoachModel.findById(req.params.id);

      res.status(200).json(findCoach);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// patch -> coach by id

const updateCoach = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("Missing authorization!");
    }
    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Not working!");
      }

      const { name, age, region, team, gender } = req.body;
      const updatedCoach = await CoachModel.findByIdAndUpdate(req.params.id, {
        name,
        age,
        region,
        team,
        gender,
      });

      res.status(200).json(updatedCoach);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// delete -> coach by id

const deleteCoach = async (req, res) => {
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      return res.status(401).send("Missing authorization!");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Not working!");
      }

      const { id } = req.params;

      await CoachModel.findByIdAndDelete(id);

      const message = `Coach with ID ${id} has been successfully deleted!`;

      res.status(200).json({ message });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCoach,
  findAllCoaches,
  updateCoach,
  deleteCoach,
  findCoachById,
};
