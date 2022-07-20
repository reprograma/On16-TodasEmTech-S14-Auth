const express = require('express')
const controller = require('../controller/pokedexController')

const router = express.Router()

router.post("/pokedex", controller.createPokemon)
router.get("/pokedex", controller.findAllPokemons)
router.get("/pokedex/:id", controller.findPokemonById)
router.patch("/pokedex/:id", controller.updatePokemonById)
router.delete("/pokedex/:id", controller.deletePokemonById)

module.exports = router