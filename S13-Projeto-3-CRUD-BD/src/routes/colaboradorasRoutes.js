const express = require('express')
const router = express.Router();
const controller = require('../controller/PREENCHER')

router.post('/colaboradoras/', controller.create)