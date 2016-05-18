var mongoose = require('mongoose');

//Creando el Esquema
var tvShowSchema = mongoose.Schema({
	title:{
		type:String
	},
	year:{
		type:Number
	},
	country:{
		type:String
	},
	poster:{
		type:String
	},
	seasons:{
		type:Number
	},
	genre:{
		type:String,
		enum:['Drama','Fantasy','Terror','Comedy']
	},
	summary:{
		type:String
	}
});

//Esportando el Modelo
module.exports = mongoose.model('tvshow',tvShowSchema);