const mongoose = require('mongoose')

const tipoSchema = mongoose.Schema({
  nome: String
})

const Tipo = mongoose.model('Tipo', tipoSchema)

module.exports = Tipo