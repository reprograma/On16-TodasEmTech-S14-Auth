const express = require("express")
const router = express.Router()
const controller = require("../controller/colaboradorasController")

router.post("/colaboradoras", controller.create)
router.post("/colaboradoras/login", controller.login)
router.get("/colaboradoras", controller.getAll)
router.delete("/colaboradoras/:id", controller.deleteById)


module.exports = router