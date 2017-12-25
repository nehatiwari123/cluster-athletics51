var cookieParser = require('cookie-parser');

var express = require('express');
var app = express();
app.use(cookieParser());
app.get('/setcookie', function(req, res){
   res.cookie('name', 'Neha'); 
   res.cookie('age', '20').send('cookie set'); 
});
app.get('/getcookies', function(req, res){
	res.send(req.cookies.name);
//res.send(req.cookies.age);
});
app.listen(8080);