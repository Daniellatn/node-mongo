const mongoose = require('mongoose')

const clienteSchema = mongoose.Schema({
  nome: String,
  cpf: String,
  telefone: String,
  email: String
})

const Cliente = mongoose.model('Cliente', clienteSchema)

module.exports = Cliente