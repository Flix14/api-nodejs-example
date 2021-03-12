try {
    const mysql = require('mysql');

    connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3307',
        user: 'root',
        password: '.x1524F.',
        database: 'empresa',
    });
    connection.connect(function(err){
        if(err){
            console.log('Error en la conexión a la base de datos', err);
        } else {
            console.log('Conexión exitosa a la base de datos');
        }
    });

    module.exports = connection;
} catch (error) {
    console.log('Error en database.js');
}