try {
    const express = require('express')
    const router = express.Router()
    const departamentoController = require('../controllers/departamentos.controller')

    router.get('/', departamentoController.getAllDepartamentos)
    router.post('/', departamentoController.addDepartamento)

    module.exports = router
} catch (err) {
    console.log(err)
}