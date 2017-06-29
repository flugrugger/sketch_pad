var red = 0;

var green = 0;

var blue = 0;

var rgb = 'rgb('+red+','+green+','+blue+')';

var newGrid = 16

var newBoxLength = 25 

function randomColor() {
	red = Math.floor((Math.random()*255));

	green = Math.floor((Math.random()*255));

	blue = Math.floor((Math.random()*255));
		
	rgb = 'rgb('+red+','+green+','+blue+')';
}

function getColor() {
	return rgb;
}

function changeBox() {
	$('.box').width(newBoxLength);
		
	$('.box').height(newBoxLength);
}

$(document).ready(function() {
	for (var i=0; i<256; i++) {
		var i = $('.box').length;
		$('.container').append('<div class="box"></div>');
	}

	$('.box').on('mouseenter', function() {
		randomColor();

		$(this).css('background-color', getColor());
	});
});

function clearButton() {
	$('.box').css('background-color', '#fff');
}

function resetButton() {
	$('div').remove('.box');

	newGrid = prompt("How many squares on each side? (Max. 100)", "Enter number here");

	newBoxLength = 400/newGrid;

	for (var i=0; i<(newGrid*newGrid); i++) {
		var i = $('.box').length;
		$('.container').append('<div class="box"></div>');
	}
	
	$('.box').on('mouseenter', function() {
		randomColor();

		$(this).css('background-color', getColor());
	});

	changeBox();
}

