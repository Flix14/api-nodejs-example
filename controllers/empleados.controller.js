try {
    let empleadoController = {}

    // GET ALL
    empleadoController.getAllEmpleados = async (req, res) => {
        if(connection) {
            await connection.query(
                `SELECT * FROM empleados;`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    // GET
    empleadoController.getEmpleado = async (req, res) => {
        if(connection) {
            await connection.query(
                `SELECT * FROM empleados WHERE id=${req.params.id};`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    // POST
    empleadoController.addEmpleado = async (req, res) => {
        if(connection) {
            await connection.query(
                `INSERT INTO empleados(nombre, edad, departamento) VALUES("${req.body.nombre}", "${req.body.edad}", ${req.body.departamento});`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    // PUT
    empleadoController.updateEmpleado = async (req, res) => {
        if(connection) {
            await connection.query(
                `UPDATE empleados SET nombre="${req.body.nombre}", edad="${req.body.edad}", departamento=${req.body.departamento} WHERE id=${req.params.id};`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    // DELETE
    empleadoController.deleteEmpleado = async (req, res) => {
        if(connection) {
            await connection.query(
                `DELETE FROM empleados WHERE id=${req.params.id};`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    module.exports = empleadoController
} catch (err) {
    console.log(err)
}