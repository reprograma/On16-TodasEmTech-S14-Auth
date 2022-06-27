const express = require('express')
const router = express.Router();
const controller = require('../controller/colaboradorasController');

router.post('/colaboradoras/', controller.create);

module.exports = router;