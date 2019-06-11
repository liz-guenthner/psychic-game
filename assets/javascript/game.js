$(document).ready(function(){
    // define variables before game starts
    var chances = 0;
    var computerGuess;
    var wrongGuesses = [];
    var wins = 0;
    var losses = 0;
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    
    
    // listen for event onkeyup
    document.onkeyup = function(event) {
        // set variable for what key is pressed
        var userKeyPressed = event.key;

        // start of game
        if (chances === 0) {
            // randomize letter picked from computerChoices array
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            chances = 9;
            wrongGuesses = [];
        }
        // if user picks what computer picked
        if (computerGuess !== userKeyPressed) {
            // if user pick is not in array, push letter to wrongGuesses array and subtract from chances
            if (wrongGuesses.indexOf(userKeyPressed) == -1) {
                wrongGuesses.push(userKeyPressed);
                chances--;
                // increment losses
                if (chances === 0) {
                    losses++;
                    $( "#alertUser" ).html( "Sorry, you lose!");
                    $( "#alertUser" ).fadeIn();
                    $( "#alertUser" ).delay(1000).fadeOut();
                }
            }
    
        } else {
            // if user picks correct letter, increment wins and reset
            wins++;
            chances = 0;
            wrongGuesses = [];
            $( "#alertUser" ).html( "You got it!");
            $( "#alertUser" ).fadeIn();
            $( "#alertUser" ).delay(1000).fadeOut();
        }
        $( "#userGuess" ).html( "You guessed: " + wrongGuesses);
        $( "#wins" ).html( "You won: " + wins);
        $( "#losses" ).html( "You lost: " + losses);
    }
}); 