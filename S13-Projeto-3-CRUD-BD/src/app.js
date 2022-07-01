require('dotenv-safe').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/mongooseConnect.js");
const coachRoutes = require("./routes/coachRoutes.js");
const pokedexRoutes = require("./routes/pokedexRoutes.js");
const colaboradorasRoutes = require("./routes/colaboradorasRoutes.js");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect();

app.use(coachRoutes);
app.use(pokedexRoutes);
app.use(colaboradorasRoutes);

module.exports = app;
