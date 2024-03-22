/* Iniciando o servidor */
const express = require('express')

/* Instanciando o objeto do express */
const app = express()

/* Configuração para express aceitar valores de entrada */
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const conn = require('./db/conn')
conn()

/* Criando rotas */
const routes = require('./routes/routes')
app.use('/', routes)


/* Executando na porta 3000 o servidor */
app.listen(3000, function() {
  console.log('Server up port 3000')
})
