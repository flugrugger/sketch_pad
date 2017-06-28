$(document).ready(function() {

	for (var i=0; i<256; i++) {
		var i = $('.box').length;
		$('.container').append('<div class="box"></div>');
	}

	$('.box').on('mouseenter', function() {
		$(this).addClass('black');
	});
});

var newGrid = 16

var newBoxLength = 25 

function clearButton() {
	$('.box').removeClass('black');
}


function changeBox() {
	$('.box').width(newBoxLength);
		
	$('.box').height(newBoxLength);
}

function resetButton() {
	$('div').remove('.box');
	
	newGrid = prompt("How many squares would you like on each side of the sketch pad?");

	newBoxLength = 400/newGrid;

	for (var i=0; i<(newGrid*newGrid); i++) {
		var i = $('.box').length;
		$('.container').append('<div class="box"></div>');
	}
	
	$('.box').on('mouseenter', function() {
		$(this).addClass('black');
	});

	changeBox();
}