
$(document).ready(function() {
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    // MY CODE //

  	// Global variables
    var random;
    var userGuess;
    var guessCount;
    var makeGuess;
    var difference;
    var feedback;

    // New game on document load
    newGame();

    // New game on New Game button click
    $('.new').on('click', (function() {
      newGame();
    }))

    // Get userGuess from input
    $('#guessButton').on('click', (function() {

      // Get userGuess
      userGuess = $('#userGuess').val();
      feedback();
      setCount();
      guessList();
      validInput();
      numbersOnly();
      clearInput();
      return false;
    }))

    function makeGuess() {
      // Get value of userGuess
      userGuess = $('#userGuess').val();
      // Increment guessCount
      guessCount++;
      // Set guesscount
      $('#count').append(guessCount);
      // Set feedback
      setFeedback();
    }

    function setRandom() {
      // Set random number between 1 & 100
      var setRandom = Math.floor((Math.random() * 100) + 1);
      console.log('set random number = ' + setRandom);
      return setRandom;
    }

  	function newGame() {
  		// Clear feedback
      setFeedback("Make your Guess!");
      clearGuessCount();
      clearGuessList();
      clearInput();
      random = setRandom();
  	}

    function clearGuessCount() {
      guessCount = 0;
      $('#count').text(guessCount);
    }

    function  clearGuessList() {
      // Clear guessList
      $('#guessList li').remove();
    }

    function clearInput() {
      userGuess = $('#userGuess').val('');
    }

  	function feedback() {
  		// Determine difference between userGuess and random
      var difference = (Math.abs(random - userGuess));

      if (difference == 0) {
        setFeedback("Congratulations! You guessed it.");
      }
  		else if (difference <= 5) {
        setFeedback("Very hot");
      }
      else if (difference <= 10) {
        setFeedback("Hot");
      }
      else if (difference <= 15) {
        setFeedback("Warm");
      }
      else {
        setFeedback("Cold");
      }
  	}

    function setFeedback(feedback) {
      // Output feedback
      $('#feedback').text(feedback);
    }

  	function setCount() {
  		// Each time a guessButton is pressed, increment guessCount by 1
      guessCount++;
      $('#count').text(guessCount);
  	}

  	function guessList() {
  		// Add value of userGuess to guessList 
  		$('#guessList').append('<li>' + userGuess + '</li>');
  	}

  	function validInput() {
  		// Number must be between 1 and 100
  		var userNumber = userGuess;
  		if (userNumber > 100) {
  			alert('Number must be less than 100');
  			return false;
  		} 
  	}

  	function numbersOnly() {
  		// Only numbers allowed
		  $('#userGuess').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57)
          return false;
    	});
	  }

});