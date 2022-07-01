const mongoose = require("mongoose");

// name, team, pokemons, region, age, gender

const CoachSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },

    name: {
      type: String,
      required: true,
      unique: true, //não aceita nomes iguais
    },

    team: String,

    region: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      default: "Uninformed.",
    },
  },
  { timestamps: true }
); //define a data de criação/atualização do documento

const Model = mongoose.model("coach", CoachSchema);

module.exports = Model;