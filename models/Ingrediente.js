const mongoose = require('mongoose')

const ingredienteSchema = mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Nome do ingrediente é obrigatório.'],
  },
  descricao: {
    type: String,
    required: [true, 'Descrição do ingrediente é obrigatório.'],
  },
  quantidade: {
    type: Number,
    required: [true, 'Qtde de ingrediente é obrigatório.'],
  }
})

const Ingrediente = mongoose.model('Ingrediente', ingredienteSchema)

module.exports = {Ingrediente, ingredienteSchema}