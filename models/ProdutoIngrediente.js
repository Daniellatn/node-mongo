const mongoose = require('mongoose')

const produtoIngredienteSchema = mongoose.Schema({
  produtoId: Number,
  ingredienteId: Number
})

const ProdutoIngrediente = mongoose.model('ProdutoIngrediente', produtoIngredienteSchema)

module.exports = ProdutoIngrediente