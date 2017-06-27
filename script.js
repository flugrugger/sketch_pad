$(document).ready(function() {

	for (var i=0; i<256; i++) {
		var i = $('.box').length;
		$('.container').append('<div class="box"></div>');
	}

	$('.box').on('mouseenter', function() {
		$(this).addClass('black');
	});
});

function clearButton() {
	$('.box').removeClass('black');
}

function resetButton() {
	$('.box').removeClass('black');

	var newGrid = prompt("How many squares would you like on each side of the sketch pad?");
}