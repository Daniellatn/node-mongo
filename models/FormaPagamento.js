const mongoose = require('mongoose')

const formaPagamentoSchema = mongoose.Schema({
  nome: String
})

const FormaPagamento = mongoose.model('FormaPagamento', formaPagamentoSchema)

module.exports = FormaPagamento