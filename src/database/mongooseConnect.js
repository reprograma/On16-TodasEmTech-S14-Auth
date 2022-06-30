const DATABASE_URI = "mongodb+srv://apimusica:1234abcd@cluster0.mt9gn.mongodb.net/projeto_db"

const mongoose = require('mongoose')

const connect = async() => {
   try {
     await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     })

     console.log('banco conectado! ')
   } catch (error) {
    console.error(error)
   }
}

module.exports = {
  connect
}