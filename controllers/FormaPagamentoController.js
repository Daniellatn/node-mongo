const { json } = require("express")
const FormaPagamento = require("../models/FormaPagamento")

const FormaPagamentoController = {
  getAll: async (req, res) => {
    res.json(await FormaPagamento.find())
  },
  get: async (req, res) => {
    try {
      res.json(await FormaPagamento.findById(req.params.id))
    } catch (error) {
      res.status(404).json({error: 'Registro não encontrado'})
    }
  },
  create: async (req, res) => {
    try {
      res.json(await FormaPagamento.create(req.body))
    } catch (error) {
      res.status(400).json(error.message)
    }
  },
  update: async (req, res) => {
    try {
      res.json(await FormaPagamento.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
      res.status(404).json({error: 'Registro não encontrado'})
    }
  },
  delete: async (req, res) => {
    try {
      res.json(await FormaPagamento.findByIdAndDelete(req.params.id))
    } catch (error) {
      res.status(404).json({error: 'Registro não encontrado'})
    }
  }
}

module.exports = FormaPagamentoController