var express = require('express'),
	PORT	= process.env.PORT || 5432,
	server	= express();


server.get('/', function (req, res) {
	res.write("Welcome!");
	res.end();
});

server.listen(PORT, function (){
	console.log('Yasss')
})