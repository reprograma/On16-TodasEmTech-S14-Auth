const express = require("express")
const router = express.Router()
const controller = require('../controller/colaboradorasController')

router.post('/colaboradoras', controller.createColaboradora)
router.get("/colaboradoras/", controller.getColaboradoras)
router.delete("/colaboradoras/:id", controller.deleteById)
router.post("/colaboradoras/login", controller.login)

module.exports = router