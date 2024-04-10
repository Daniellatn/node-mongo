const { json } = require("express")
const Cargo = require("../models/Cargo")

const CargoController = {
  getAll: async (req, res) => {
    res.json(await Cargo.find())
  },
  get: async (req, res) => {
    try {
      res.json(await Cargo.findById(req.params.id))
    } catch (error) {
      res.status(404).json({error: 'Registro não encontrado'})
    }
  },
  create: async (req, res) => {
    try {
      res.json(await Cargo.create(req.body))
    } catch (error) {
      res.status(400).json(error.message)
    }
  },
  update: async (req, res) => {
    try {
      res.json(await Cargo.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
      res.status(404).json({error: 'Registro não encontrado'})
    }
  },
  delete: async (req, res) => {
    try {
      res.json(await Cargo.findByIdAndDelete(req.params.id))
    } catch (error) {
      res.status(404).json({error: 'Registro não encontrado'})
    }
  }
}

module.exports = CargoController