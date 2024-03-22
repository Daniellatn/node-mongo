const express = require('express')
const Produto = require('../models/Produto')
const router = express.Router()

router.get('/', function(req, res) {
  res.json({})
})

router.get('/produtos', async function(req, res) {
  res.json(await Produto.find())
})

router.post('/produtos', async function(req, res) {
  res.json(await Produto.create({nome: 'Pizza'}))
})

module.exports = router