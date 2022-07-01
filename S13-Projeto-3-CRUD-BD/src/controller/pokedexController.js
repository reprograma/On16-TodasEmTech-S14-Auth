const PokedexModel = require("../models/pokedexModel");
const CoachModel = require("../models/coachModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const createPokemon = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você precisa de uma autorização");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado");
      }
      const { coachId, name, type, abilites, description } = req.body;

      if (!coachId) {
        return res.status(400).json({ message: "O ID do treinador é obrigatório" });
      }
      const findCoach = await CoachModel.findById(coachId);
      if (!findCoach) {
        return res.status(404).json({ message: "Treinador não encontrado" });
      }
      const newPokemon = new PokedexModel({
        coach: coachId,
        name,
        type,
        abilites,
        description,
      });
      const savedPokemon = await newPokemon.save();
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
      return res.status(401).send("Você precisa de uma autorização");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado");
      }
      const allPokemons = await PokedexModel.find().populate("coach");
      res.status(200).json(allPokemons);
    });
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const findPokemonById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você precisa de uma autorização");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado");
      }
      const findPokemon = await PokedexModel.findById(req.params.id).populate(
        "coach"
      );
      if (findPokemon == null) {
        res.status(404).json({ message: "Pokemon não encontrado" });
      }
      res.status(200).json(findPokemon);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePokemonById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você precisa de uma autorização");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado");
      }
      const { id } = req.params;
      const { coachId, name, type, abilites, description } = req.body;
      const findPokemon = await PokedexModel.findById(id);
      if (findPokemon == null) {
        res.status(404).json({ message: "Pokemon não encontrado " });
      }
      if (coachId) {
        const findCoach = await CoachModel.findById(coachId);

        if (findCoach == null) {
          return res.status(404).json({ message: "Treinador não encontrado" });
        }
      }
      findPokemon.name = name || findPokemon.name;
      findPokemon.type = type || findPokemon.type;
      findPokemon.abilites = abilites || findPokemon.abilites;
      findPokemon.description = description || findPokemon.description;
      findPokemon.coach = coachId || findPokemon.coach;
      const savedPokemon = await findPokemon.save();
      res.status(200).json(savedPokemon);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePokemon = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você precisa de uma autorização");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso negado");
      }
      const { id } = req.params;
      const findPokemon = await PokedexModel.findById(id);
      if (findPokemon == null) {
        return res.status(404).json({ message: `Pokemon com id ${id} não encontrado` });
      }
      await findPokemon.remove();
      res.status(200).json({ message: `Pokemon com id ${id} foi excluído com sucesso` });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPokemon,
  findAllPokemons,
  findPokemonById,
  updatePokemonById,
  deletePokemon,
};