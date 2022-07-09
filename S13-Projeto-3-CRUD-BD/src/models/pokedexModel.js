const mongoose = require('mongoose')

const PokedexSchema = new mongoose.Schema({
   _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
   },

   name: {
    type: String,
    required: true
   },

   type: {
    type: [String],
    required: true
   },

   abilities: {
    type: [String],
    required: true
   },

   description: String,

   coach: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'coach'
   }
}, { timestamps: true },
{
   versionKey: false
});

const Model = mongoose.model('pokedex', PokedexSchema)

module.exports = Model