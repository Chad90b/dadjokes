var lines;
var randomNumber;
var lastRandomNumber;

	$(document.body).ready(function () {

	$.ajax({
		url: 'dadjokes.txt'
	}).done(function(content) {

	lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');

	if (lines && lines.length) {
		$('#showLine').ready( function() {
			while (randomNumber === lastRandomNumber) {
				randomNumber = parseInt(Math.random() * lines.length);
				if (lines.length === 1) { break; }
		}
		lastRandomNumber = randomNumber;
            
			$('#dadjoke').text(lines[randomNumber]);
			});
		}
	});
});