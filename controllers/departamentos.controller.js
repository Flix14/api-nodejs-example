try {
    let departamentoController = {}

    // GET ALL
    departamentoController.getAllDepartamentos = async (req, res) => {
        if(connection) {
            await connection.query(
                `SELECT * FROM departamentos;`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    // GET
    departamentoController.getDepartamento = async (req, res) => {
        if(connection) {
            await connection.query(
                `SELECT * FROM departamentos WHERE id=${req.params.id};`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    // POST
    departamentoController.addDepartamento = async (req, res) => {
        console.log( `INSERT INTO departamentos(nombre) VALUES(${req.body.nombre});`)
        if(connection) {
            await connection.query(
                `INSERT INTO departamentos(nombre) VALUES("${req.body.nombre}");`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    // PUT
    departamentoController.updateDepartamento = async (req, res) => {
        if(connection) {
            await connection.query(
                `UPDATE departamentos SET nombre="${req.body.nombre}" WHERE id=${req.params.id};`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    // DELETE
    departamentoController.deleteDepartamento = async (req, res) => {
        if(connection) {
            await connection.query(
                `DELETE FROM departamentos WHERE id=${req.params.id};`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    module.exports = departamentoController
} catch (err) {
    console.log(err)
}