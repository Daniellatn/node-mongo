const mongoose = require('mongoose')

const comandaSchema = mongoose.Schema({
  mesa: String,
  funcionarioId: Number,
  clienteId: Number,
  formaPagamentoId: Number,
  dataPagamento: Date,
  data: Date
})

const Comanda = mongoose.model('Comanda', comandaSchema)

module.exports = Comanda