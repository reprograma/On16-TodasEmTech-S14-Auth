const express = require('express')
const router = express.Router()
const controller = require('../controller/colaboradorasController')

router.post('/colaboradoras/', controller.create) //criar usuaria nova
router.get('/colaboradoras/', controller.getAll) //listar as usuárias
router.delete('/colaboradoras/:id', controller.deleteById) //deletar
router.post('/colaboradoras/login', controller.login) //fazer login

module.exports = router