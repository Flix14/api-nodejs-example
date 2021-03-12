var express = require('express');
var morgan = require('morgan');
const connection = require('./database');
var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/api/departamentos', require('./routes/departamentos.routes'))
// app.use('/api/empleados', require('./routes/empleados.routes'))

module.exports = app;