var validGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordList = ["chocobo", "materia", "bahamut", "crystal", "summoner", "ifrit", "shiva", "cure", "dragoon", "cid", "biggs", "wedge", "map", "fantasy", "paladin", "princess", "castle"]
var answerList = [];
var UsedLetter = [];
var userAttempts = 7;
var gameOver = false;
var Score = 0;


//pressing enter to start the game

function start() {
        document.onkeyup = function (event) {
            if (event.keyCode == 13) {
                game()
            
            }
            
        }
}

//the game loop

function game() {

    //randomly picking a word from the word list

    var computerWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(computerWord)

    //turning randomly assigned word into dashes

    function createDashes() {
        dashes = ""
        for (var i = 0; i < computerWord.length; i++) {
            dashes += "_";
        }
        return dashes;
    }

    //turning dashes into an array

    var dashesIntoworlds = createDashes(computerWord)
    console.log(dashesIntoworlds)
    answerList = dashesIntoworlds.split('');

    
    //removing last item in array from split - no longer needed
    //answerList.pop();
    //console.log(answerList)


    //pushing score and dashes into html
    document.getElementById("WinResult").innerHTML = Score;
    
    document.getElementById("dashes").innerHTML = answerList.join("  ");

    //keyboard inputs are placed inside of a variable

    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        
    //signaling the game to start

        if (gameOver === false) {

            //cheaking that the input is a letter of the alphabet

            if (validGuess.indexOf(userGuess) > -1) {
                console.log("valid key " + userGuess + " pressed!")

                //taking input and searching to see if it is in the randomly picked word
                //if it is in the word, it will replace it with that character
                
                if (computerWord.indexOf(userGuess) > -1) {
                    for (var i = 0; i < computerWord.length + 1; i++) {
                        if (computerWord.charAt(i) === userGuess) {
                            answerList[i] = userGuess;
                            console.log(answerList)
                        }
                    }
                }

                //if the letter is not in the word, character is pushed into user guesses variable
                else {
                    if (UsedLetter.indexOf(userGuess) === -1) {
                        UsedLetter.push(userGuess);
                    }
                }
            }
            else {
                console.log("invalid key pressed!")
            }

            //updates webpage with the used letters and number of tries by user
            
            document.getElementById("UsedLetters").innerHTML = "Used Letters: " + UsedLetter;
            document.getElementById("NumberTries").innerHTML = "Number of tries: " + (userAttempts - UsedLetter.length);
            document.getElementById("dashes").innerHTML = answerList.join("  ");
            
        }

            //lost game condition  
            //brings code back to start to await enter input      

        if (UsedLetter.length > userAttempts - 1) {
            UsedLetter = [];
            document.getElementById("dashes").innerHTML = "Game over!";
            document.getElementById("NumberTries").innerHTML = "Number of tries: 7"
            document.getElementById("UsedLetters").innerHTML = "Used Letters: " + UsedLetter;
            console.log(gameOver)
            gameOver === !false;

            start()

        }

            //win game condition
            //updates score
            //brings code back to start to await enter input

        if (answerList.indexOf("_") === -1) {
            Score += 1; 
            UsedLetter = [];
            console.log("You win!")
            document.getElementById("dashes").innerHTML = "You Win! Press enter to Play again!";
            document.getElementById("NumberTries").innerHTML = "Number of tries: 7"
            document.getElementById("UsedLetters").innerHTML = "Used Letters: " + UsedLetter;
            document.getElementById("WinResult").innerHTML = Score;
            gameOver === !false;

            start()
            
        }
        
    }
}
start()
//game()