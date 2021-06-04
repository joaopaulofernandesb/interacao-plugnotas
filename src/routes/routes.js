const { Router } = require('express')
const Ceps = require('../controller/CepController')

const routes = Router()

routes.post('/cadastro', Ceps.cadastrarCep)
routes.get('/', Ceps.listarCep)

module.exports = routes