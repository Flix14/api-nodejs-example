try {
    const express = require('express')
    const router = express.Router()
    const departamentoController = require('../controllers/departamentos.controller')

    router.get('/', departamentoController.getAllDepartamentos)
    router.get('/:id', departamentoController.getDepartamento)
    router.post('/', departamentoController.addDepartamento)
    router.put('/:id', departamentoController.updateDepartamento)
    router.delete('/:id', departamentoController.deleteDepartamento)

    module.exports = router
} catch (err) {
    console.log(err)
}