var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var numRouter = require('./routes/numbers');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('public'));

app.use('/numbers', numRouter);

app.use(function (req, res, next) {
	console.log('Got a request. yay!');
	next();
});

app.get('/', function (req, res) {
	var filename = path.join(__dirname, 'public/views/index.html');
	console.log('filename:', filename);
	res.sendFile(filename);
});

app.set("port", (process.env.PORT || 3000));

console.log("listening on 3000");

app.listen(3000);
