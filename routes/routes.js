const express = require('express')
const CargoController = require('../controllers/CargoController')
const ClienteController = require('../controllers/ClienteController')
const ComandaController = require('../controllers/ComandaController')
const FormaPagamentoController = require('../controllers/FormaPagamentoController')
const FuncionarioController = require('../controllers/FuncionarioController')
const IngredienteController = require('../controllers/IngredienteController')
const ProdutoComandaController = require('../controllers/ProdutoComandaController')
const ProdutoController = require('../controllers/ProdutoController')
const ProdutoIngredienteController = require('../controllers/ProdutoIngredienteController')
const TipoController = require('../controllers/TipoController')
const router = express.Router()

router.get('/', function(req, res) {
  res.json({})
})

// Cargo
router.get('/cargo', (req, res) => CargoController.getAll(req, res))
router.post('/cargo', (req, res) => CargoController.create(req, res))
router.get('/cargo/:id', (req, res) => CargoController.get(req, res))
router.put('/cargo/:id', (req, res) => CargoController.update(req, res))
router.delete('/cargo/:id', (req, res) => CargoController.delete(req, res))

// Cliente
router.get('/cliente', (req, res) => ClienteController.getAll(req, res))
router.post('/cliente', (req, res) => ClienteController.create(req, res))
router.get('/cliente/:id', (req, res) => ClienteController.get(req, res))
router.put('/cliente/:id', (req, res) => ClienteController.update(req, res))
router.delete('/cliente/:id', (req, res) => ClienteController.delete(req, res))

// Comandas
router.get('/comandas', (req, res) => ComandaController.getAll(req, res))
router.post('/comandas', (req, res) => ComandaController.create(req, res))
router.get('/comandas/:id', (req, res) => ComandaController.get(req, res))
router.put('/comandas/:id', (req, res) => ComandaController.update(req, res))
router.delete('/comandas/:id', (req, res) => ComandaController.delete(req, res))

// Forma Pagamento
router.get('/forma-pagamento', (req, res) => FormaPagamentoController.getAll(req, res))
router.post('/forma-pagamento', (req, res) => FormaPagamentoController.create(req, res))
router.get('/forma-pagamento/:id', (req, res) => FormaPagamentoController.get(req, res))
router.put('/forma-pagamento/:id', (req, res) => FormaPagamentoController.update(req, res))
router.delete('/forma-pagamento/:id', (req, res) => FormaPagamentoController.delete(req, res))

// Funcionario
router.get('/forma-pagamento', (req, res) => FuncionarioController.getAll(req, res))
router.post('/forma-pagamento', (req, res) => FuncionarioController.create(req, res))
router.get('/forma-pagamento/:id', (req, res) => FuncionarioController.get(req, res))
router.put('/forma-pagamento/:id', (req, res) => FuncionarioController.update(req, res))
router.delete('/forma-pagamento/:id', (req, res) => FuncionarioController.delete(req, res))

// Ingrediente
router.get('/ingrediente', (req, res) => IngredienteController.getAll(req, res))
router.post('/ingrediente', (req, res) => IngredienteController.create(req, res))
router.get('/ingrediente/:id', (req, res) => IngredienteController.get(req, res))
router.put('/ingrediente/:id', (req, res) => IngredienteController.update(req, res))
router.delete('/ingrediente/:id', (req, res) => IngredienteController.delete(req, res))

// Produto Comanda
router.get('/produto-comanda', (req, res) => ProdutoComandaController.getAll(req, res))
router.post('/produto-comanda', (req, res) => ProdutoComandaController.create(req, res))
router.get('/produto-comanda/:id', (req, res) => ProdutoComandaController.get(req, res))
router.put('/produto-comanda/:id', (req, res) => ProdutoComandaController.update(req, res))
router.delete('/produto-comanda/:id', (req, res) => ProdutoComandaController.delete(req, res))

// Produto
router.get('/produto', (req, res) => ProdutoController.getAll(req, res))
router.post('/produto', (req, res) => ProdutoController.create(req, res))
router.get('/produto/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produto/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/produto/:id', (req, res) => ProdutoController.delete(req, res))

// Produto Ingrediente
router.get('/produto-ingrediente', (req, res) => ProdutoIngredienteController.getAll(req, res))
router.post('/produto-ingrediente', (req, res) => ProdutoIngredienteController.create(req, res))
router.get('/produto-ingrediente/:id', (req, res) => ProdutoIngredienteController.get(req, res))
router.put('/produto-ingrediente/:id', (req, res) => ProdutoIngredienteController.update(req, res))
router.delete('/produto-ingrediente/:id', (req, res) => ProdutoIngredienteController.delete(req, res))

// Tipo
router.get('/tipo', (req, res) => TipoController.getAll(req, res))
router.post('/tipo', (req, res) => TipoController.create(req, res))
router.get('/tipo/:id', (req, res) => TipoController.get(req, res))
router.put('/tipo/:id', (req, res) => TipoController.update(req, res))
router.delete('/tipo/:id', (req, res) => TipoController.delete(req, res))


module.exports = router