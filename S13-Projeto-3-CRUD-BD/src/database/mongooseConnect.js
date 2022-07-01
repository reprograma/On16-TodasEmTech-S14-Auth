const DATABASE_URI = "mongodb+srv://caroliinaasilva_:Carolzinha1.@cluster0.mt9gn.mongodb.net/projeto-s14"

const mongoose = require('mongoose')

const connect = async() => {
   try {
     await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     })

     console.log('banco conectado!')
   } catch (error) {
    console.error(error)
   }
}

module.exports = {
  connect
}