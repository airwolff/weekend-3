var router = require('express').Router();

// empty object for numbers to populate
var numbers = {};

// to store operation result
var answer;

//
router.post('/', function (req, res) {
	numbers = req.body;

	switch (req.body.symbol) {
	case 'add':
		answer = parseFloat(numbers.numOne) + parseFloat(numbers.numTwo);
		res.send({
			answer
		});
		break;
	case 'subtract':
		answer = parseFloat(numbers.numOne) - parseFloat(numbers.numTwo);
		res.send({
			answer
		});
		break;
	case 'multiply':
		answer = parseFloat(numbers.numOne) * parseFloat(numbers.numTwo);
		res.send({
			answer
		});
		break;
	case 'divide':
		answer = parseFloat(numbers.numOne) / parseFloat(numbers.numTwo);
		res.send({
			answer
		});
		break;
	default:
		res.status(400).send('unknown operation');
	}
});
router.get('/', function (req, res) {
	res.send(numbers);
});
module.exports = router;
