$(function () {
	$('#clear').on('click', clear);
	$('.symbol').on('click', addNum);
}); // end function

var mathNum = {
	numOne: '',
	numTwo: '',
	symbol: '',
};

var symbol = {
	'+': 'add',
	'-': 'sub',
	'*': 'mult',
	'/': 'divide'
};

// Receives from html input from form, posts to server
function addNum(event) {
	event.preventDefault();
	console.log($(this));
	var symbol = $(this).attr('id');
	var input = $("form").serializeArray();
	console.log(input);
	input.forEach(function (element) {
		mathNum[element.name] = element.value;
	});
	mathNum.symbol = symbol;
$('form').find('input').val('');

	$.ajax({
		type: 'POST',
		url: '/numbers',
		data: mathNum,
		success: getAnswer
	}); // end ajax

	$(this).find('input[type=text]').val('');

} // end form submit

function getAnswer(response) {
	mathNum.total = response;
	console.log(response);
	$('#answer').text(response.answer);
} // end of getAnswer function

function clear() {
	$('form').find('input').val('');
	$('#answer').html('');

}

// $.ajax({
// 	type: 'POST',
// 	url: '/math/reset',
// 	data: resetTotal,
// 	success: function () {
// 		input.numOne = '';
// 		input.numTwo = '';
// 	}
// });
//
