const mongoose = require('mongoose')

const funcionarioSchema = mongoose.Schema({
  nome: String,
  cpf: String,
  endereco: String,
  sexo: CharacterData,
  telefone: String,
  cargoId: Number
})

const Funcionario = mongoose.model('Funcionario', funcionarioSchema)

module.exports = Funcionario