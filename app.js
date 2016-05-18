//Requiriendo Modulos
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Requiriendo Modulos de Rutas
var routerIndex = require('./routes/index');

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Middlewares de Rutas
app.use('/',routerIndex);

//Inicializando el Server
app.listen(3000,function (req,res) {
	console.log('Servidor Corriendo en http://localhost:3000');
})