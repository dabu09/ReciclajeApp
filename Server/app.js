//Modules
var express = require('express');
var mongoose = require('mongoose');

var app = express();

//Config
app.configure(function(){
	//configurations goes here
});


app.get('/',function(req,res){
	res.send('Hello World');
});

app.listen(3000);
console.log("Server Up And Running");