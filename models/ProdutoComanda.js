const mongoose = require('mongoose')

const produtoComandaSchema = mongoose.Schema({
  produtoId: Number,
  comandaId: Number,
  quantidade: Number
})

const ProdutoComanda = mongoose.model('ProdutoComanda', produtoComandaSchema)

module.exports = ProdutoComanda