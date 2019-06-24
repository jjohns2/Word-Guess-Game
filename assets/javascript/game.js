var validGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordList = ["chocobo", "materia", "bahamut", "crystal", "summoner", "ifrit", "shiva", "cure"]
var computerWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(computerWord)
var answerList = [];
var UsedLetter = [];
var userAttempts = 10;
var gameOver = false;
var Wins = 0;

for (var i = 0; i < computerWord.length; i++) {
    answerList[i] = "_";
}



    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();

        
        if (gameOver === false) {
            
            if (validGuess.indexOf(userGuess) > -1) {
                console.log("valid key " + userGuess + " pressed!")

                if (computerWord.indexOf(userGuess) > -1) {

                    for (var i = 0; i < computerWord.length; i++) {
                        if (computerWord.charAt(i) === userGuess) {
                            answerList[i] = userGuess;
                            console.log(answerList)
                        }
                    }
                }
                else {
                    if (UsedLetter.indexOf(userGuess) === -1) {    
                        UsedLetter.push(userGuess);
                    }
                }

            }
            else {
                console.log("invalid key pressed!")
            }
            document.getElementById("dashes").innerHTML = answerList.join("  ");
            document.getElementById("UsedLetters").innerHTML = UsedLetter;
            document.getElementById("NumberTries").innerHTML = "Number of tries " + (userAttempts -  UsedLetter.length);
        }    
        if (UsedLetter.length > userAttempts-1) {
            gameOver = true;
            document.getElementById("dashes").innerHTML = "Game over!";
            console.log(gameOver)
        
        }
        if (answerList.indexOf("_") === -1) {
            Wins = Wins + 1;
            document.getElementById("dashes").innerHTML = "You Win!";
            document.getElementById("WinResult").innerHTML = Wins;
        }
    }


