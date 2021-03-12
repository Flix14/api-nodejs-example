try {
    let departamentoController = {}

    // GET
    departamentoController.getAllDepartamentos = async (req, res) => {
        if(connection) {
            await connection.query(
                'SELECT * FROM departamentos;',
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
        if(connection) {
            await connection.query(
                `INSERT INTO departamentos (nombre) VALUES (${req.body.nombre});`,
                (err, rows) => {
                    if(!err) {
                        res.status(200).json(rows)
                    }
                }
            )
        }
    }

    // PUT

    // DELETE


    module.exports = departamentoController
} catch (err) {
    console.log(err)
}