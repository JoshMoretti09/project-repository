var HANG = HANG || {};

HANG.guesses = 0;

HANG.hang = function(word){
	var alpha = 'abcdefghijklmnopqrstuvwxyz';
	var alphaArr = alpha.split('');

	
	var word = word;
	var wordArr = word.split('')
	HANG.guesses = wordArr.length + 4;

	console.group('Array info')
		console.log('Guesses: ' + HANG.guesses)
		console.log(alphaArr);
		console.log(wordArr);
	console.groupEnd();

	//updated the DOM with the Alphabet
	for (var i = 0; i < alphaArr.length; i++) {
		$('#js-letter-picker').append('<span data-letter="'+ alphaArr[i] +'">'+ alphaArr[i] +'</span>')
	};
	//Created array to hold the word to guess
	for (var i = 0; i < word.length; i++) {
		$('#js-word').append('<span data-letter="'+ wordArr[i] +'"></span>')
	};
	//click event to left the selected letter against the word
	$("#js-letter-picker span").on('click', function(){
		//if class exists return false
		if ($(this).hasClass('missed-letter')) {
			return false;
		};

		if ($(this).hasClass('correct-letter')) {
			return false;
		};

		var selectedLetter = $(this).data('letter');
		$('#js-word span[data-letter="' + selectedLetter + '"]').text(selectedLetter);

		var count = $('#js-word span[data-letter="' + selectedLetter + '"]').length;
		console.log(count)
		if (count === 0) {
			$(this).addClass('missed-letter');
			HANG.guesses = HANG.guesses - 1;
			console.log('number remaining: ' + HANG.guesses)

			//End game if out of guesses
			if (HANG.guesses === 0) {
				$('.alphabet').html('<img src="https://drawception.com/pub/panels/2015/1-2/y1ENP6h9bt-12.png"></img>').append('<h1 class="loser">You lose</h1>')
			};

		} else {
			$(this).addClass('correct-letter');
		}
		var winner = $('#js-word span:empty').length;
		if(winner === 0) {
			//alert('You won the game, you soooo coool')
			$('.alphabet').html('<img src="http://media.giphy.com/media/P9aIWTPVGgkCY/giphy.gif" class="win"></img>').append('<h1>You win!</h1>');
		}

		});

	}

		HANG.reset = function(){
			$('#js-word').empty();
			$('#js-letter-picker').empty();
			HANG.guesses = 0;
			HANG.hang('applesauce')
		}
			


$(document).on('ready', function(){
HANG.hang('monkey');
$('#reset').on('click', function(){
				HANG.reset()
			});


});



