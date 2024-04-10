const mongoose = require('mongoose')

const cargoSchema = mongoose.Schema({
  nome: String
})

const Cargo = mongoose.model('Cargo', cargoSchema)

module.exports = Cargo