//Requiriendo Modulos
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

//Conexion con MongoDB
mongoose.connect('mongodb://localhost/serietv',function (err,res) {
	if(err){
		console.log('ERROR: Conexion con la base de Datos '+err)
	}else{
		console.log('Conexion con la Base de datos Establecida');
	}
});

//Requiriendo Modulos de Rutas
var routerIndex = require('./routes/index');

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride());

//Middlewares de Rutas
app.use('/',routerIndex);

//Inicializando el Server
app.listen(3000,function (req,res) {
	console.log('Servidor Corriendo en http://localhost:3000');
})