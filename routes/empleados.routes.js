try {
    const express = require('express')
    const router = express.Router()
    const empleadoController = require('../controllers/empleados.controller')

    router.get('/', empleadoController.getAllEmpleados)
    router.get('/:id', empleadoController.getEmpleado)
    router.post('/', empleadoController.addEmpleado)
    router.put('/:id', empleadoController.updateEmpleado)
    router.delete('/:id', empleadoController.deleteEmpleado)

    module.exports = router
} catch (err) {
    console.log(err)
}