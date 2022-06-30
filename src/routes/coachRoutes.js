// 1.controller
// 2. ajuda do express

const controller = require('../controller/coachController')
const express = require('express')

const router = express.Router()

router.post("/treinador", controller.createCoach)
router.get("/treinadores", controller.findAllCoaches)
router.get("/treinadores/:id", controller.findCoachById)
router.patch("/treinador/:id", controller.updateCoach)
router.delete("/treinador/:id", controller.deleteCoach)

module.exports = router