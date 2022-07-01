const controller = require("../controller/pokedexController");
const express = require("express");
const router = express.Router();

router.post("/pokedex", controller.createPokemon);
router.get("/pokedex", controller.findAllPokemons);
router.get("/pokedex/:id", controller.findPokemonById);
router.patch("/pokedex/:id", controller.updatePokemonById);
router.delete("/pokedex/:id", controller.deletePokemon);

module.exports = router;
