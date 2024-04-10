const mongoose = require('mongoose')
const { ingredienteSchema } = require('./Ingrediente')


const produtoSchema = mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatório.'],
    minLength: [2, 'Tamanho mínimo é 2.'],
    maxLength: [50, 'Tamanho máximo é 50.'],
    trim: true //tira espaços
  },
  preco: {
    type: Number,
    default: 10.541,
    required: [true, 'Preço é obrigatório.'],
    cast: '{VALUE} não é um número.',
    match: /^\d+(\.\d{1,2})?$/
  },
  tamanho: {
    type: String,
    required: [true, 'Tamanho é obrigatório.'],
    enum: { values: ['P', 'M', 'G', 'Pequeno', 'Médio', 'Grande'], message: '{VALUE} não é um tamanho.' },
    minLength: [1, 'Tamanho mínimo é 1.'],
    maxLength: [20, 'Tamanho máximo é 20.']
  },
  tipo: {
    type: String,
    required: [true, 'Tipo é obrigatório.'],
    enum: { values: ['FastFood', 'Bebidas', 'Sobremesa'], message: '{VALUE} não é um tipo.' },
    minLength: [1, 'Tamanho mínimo é 1.'],
    maxLength: [20, 'Tamanho máximo é 20.']
  },
  ingredientes: [ingredienteSchema]
})

const Produto = mongoose.model('Produto', produtoSchema)

module.exports = Produto

// Regex
// validate: {
//   validator: function(v) {
//     return /\d{3}.\d{2}/.test(v);
//   },
//   message: props => `${props.value} Não é um valor válido.`
// },