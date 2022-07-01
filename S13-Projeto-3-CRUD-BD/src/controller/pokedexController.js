const PokedexModel = require("../models/pokedexModel.js");
const CoachModel = require("../models/coachModel.js");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

const createPokemon = async (req, res) => {
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

      const { coachId, name, type, abilities, description } = req.body;
      const findCoach = await CoachModel.findById(coachId);

      if (!coachId) {
        return res.status(400).json({ message: "Coach ID is required!" });
      }

      if (!findCoach) {
        return res.status(404).json({ message: "Coach not found!" });
      }

      const newPokemon = new PokedexModel({
        coach: coachId,
        name,
        type,
        abilities,
        description,
      });

      const savedPokemon = await (await newPokemon.save()).populate("coach");

      res.status(200).json(savedPokemon);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findAllPokemons = async (req, res) => {
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

      const allPokemons = await PokedexModel.find().populate("coach");

      res.status(200).json(allPokemons);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findPokemonById = async (req, res) => {
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

      const findPokemon = await PokedexModel.findById(req.params.id).populate(
        "coach"
      );

      if (findPokemon == null) {
        return res.status(404).json({ message: "Pokemon not found!" });
      }

      res.status(200).json(findPokemon);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * UPDATE:
 * check if pokemon exists
 * check if received coachId exists
 * check if received data is valid
 */

const updatePokemonById = async (req, res) => {
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

      const { id } = req.params;
      const { coachId, name, type, abilities, description } = req.body;

      const findPokemon = await PokedexModel.findById(id);

      if (findPokemon == null) {
        return res.status(404).json({ message: "Pokemon not found!" });
      }

      if (coachId) {
        const findCoach = await CoachModel.findById(coachId);
        if (findCoach == null) {
          return res.status(404).json({ message: "Coach not found!" });
        }
      }

      findPokemon.name = name || findPokemon.name;
      findPokemon.type = type || findPokemon.type;
      findPokemon.abilities = abilities || findPokemon.abilities;
      findPokemon.description = description || findPokemon.description;
      findPokemon.coach = coachId || findPokemon.coach;

      const savedPokemon = await findPokemon.save();

      res.status(200).json(savedPokemon);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deletePokemonById = async (req, res) => {
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

      const { id } = req.params;
      const findPokemon = await PokedexModel.findById(id);

      if (findPokemon == null) {
        return res
          .status(404)
          .json({ message: `Pokemon with ID ${id} not found` });
      }

      await findPokemon.delete();

      res
        .status(200)
        .json({ message: `Pokemon ${findPokemon.name} successfully deleted!` });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPokemon,
  findAllPokemons,
  findPokemonById,
  updatePokemonById,
  deletePokemonById,
};
