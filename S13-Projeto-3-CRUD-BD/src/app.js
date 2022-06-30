require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const coachRoutes = require('./routes/coachRoutes')
const pokedexRoutes = require('./routes/pokedexRoutes')
const colaboradorasRoutes = require('./routes/colaboradorasRoutes')

const app = express()

// 1. body parse
// 2. deixar a api publica
// 3. conectar o banco
app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(coachRoutes)
app.use(pokedexRoutes)
app.use(colaboradorasRoutes)

module.exports = app

