var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var numbers = require('./routes/numbers');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/numbers', numbers);

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

app.use(express.static('./public'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Listening on port ', app.get('port'));
});
