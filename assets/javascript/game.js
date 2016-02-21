//sets wins and losses equal to 0
var wins = 0
var losses = 0

//starts the guesses left at 9
var guessesLeft= 9;


var ComputerLetter = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var Random = ComputerLetter[Math.round(Math.random() * (ComputerLetter.length - 1))];
console.log(Random);

//initializes the GuessesSoFar variable
var GuessesSoFar= []; 

//sets up the user's guesses
	document.onkeyup = function(event) {
	    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();  //makes the user's guess lowercase
	
		GuessesSoFar.push(userGuess);	//adds userGuess to the GuessesSoFar array
		
			if (userGuess == Random){
				alert("Correct!");
				wins++;	
				reset()
				}
			else{
				guessesLeft--;
					if (guessesLeft == 0) {
						alert ("You lose!");
						losses++ ;
						guessesLeft = 9;
						GuessesSoFar = [];	
						reset()	
					};
			};


function reset(){
		guessesLeft = 9;
		GuessesSoFar = [];
		}


	var html= "<p> Press a letter to start playing.</p>"+
	"<p>Wins: "+ wins + "</p>"+
	"<p>Losses: "+losses + "</p>"+
	"<p>Guesses Left: "+ guessesLeft +"</p>"+
	"<p> Your Guesses so far: "+ GuessesSoFar +"</p>";



document.querySelector('#game').innerHTML = html;
	
	}


