const express = require('express')

const router = express.Router();
const controller = require('../controller/colaboradorasController')
router.post('/colaboradoras/', controller.create)
router.get('/colaboradoras', controller.getAll)
router.delete('/colaboradora/:id', controller.deleteById)
router.post('/colaboradoras/login', controller.login)

module.exports = router
