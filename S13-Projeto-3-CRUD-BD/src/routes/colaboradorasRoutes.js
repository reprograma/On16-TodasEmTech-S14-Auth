const controller = require ('../controller/colaboradorasController')
const express = require ('express')
const router = express.Router()

router.post('/colaboradoras', controller.create)
// router.get('/colaboradoras', controller.getAll)
// router.patch
module.exports = router