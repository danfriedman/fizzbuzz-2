$('.submit').on('click', function() {
	$('p').remove();
	$('.submit').after('<p class="start"></p>');

	var counter = $('.game-number').val();
	counter=parseInt(counter);
	
	if (isNaN(counter)) {
		$('.start').prepend('<p>Not a number! Try again</p>');
	} else {
	runGame(counter);
	}
});

function runGame(maxNumber) {
	for (var counter = 0; counter<maxNumber; counter++) {
		if (counter%5 == 0 && counter%3 == 0) {
			$('p').last().append('<p>fizzbuzz</p>');
		} else if (counter%3 == 0) {
			$('p').last().append('<p>fizz</p>');
		} else if (counter%5 == 0) {
			$('p').last().append('<p>buzz</p>');
		} else {
			$('p').last().append('<p>'+counter+'</p>');
		}
	}
}