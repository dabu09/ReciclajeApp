//Modules
var express = require('express');
var mongoose = require('mongoose');
var app = express();

//on connection sucess
mongoose.connection.on('open',function(ref){
	app.set('env','development');
	//app.set('env','production');
	app.configure(function(){
		//standar configs

		//development configs
		if(app.get('env')=='development'){

		}
		//production configs
		if(app.get('env')=='production'){

		}
	});
	//routes
	app.get('/',function(req,res){
		res.send('Hello World');
	});
	app.listen(3000);
	console.log("Server Up And Running");
});

//on connection error

mongoose.connection.on('error',function(error){
	console.log('Could not connect to db');
	console.log('Error:'+error);
});

var db = mongoose.connect('mongodb://localhost/test');;