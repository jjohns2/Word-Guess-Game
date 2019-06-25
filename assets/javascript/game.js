var validGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordList = ["chocobo", "materia", "bahamut", "crystal", "summoner", "ifrit", "shiva", "cure", "dragoon", "cid", "biggs", "wedge", ]
var spaceanswerList = []
var answerList = [];
var UsedLetter = [];
var userAttempts = 7;
var gameOver = false;
var Score = 0;
var Win = false; //adding wins error



function start() {
        document.onkeyup = function (event) {
            if (event.keyCode == 13) {
                game()
            
            }
        }
}

function game() {

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

    
    //removing last item in array from split
    //answerList.pop();
    //console.log(answerList)

    //game loops and conditions

    document.getElementById("WinResult").innerHTML = Score;
    
    document.getElementById("dashes").innerHTML = answerList.join("  ");

    document.onkeyup = function (event) {
        

        var userGuess = event.key.toLowerCase();
        //console.log(userGuess)
        

        if (gameOver === false) {

            if (validGuess.indexOf(userGuess) > -1) {
                console.log("valid key " + userGuess + " pressed!")
                
                if (computerWord.indexOf(userGuess) > -1) {
                    for (var i = 0; i < computerWord.length + 1; i++) {
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
            
            document.getElementById("UsedLetters").innerHTML = "Used Letters: " + UsedLetter;
            document.getElementById("NumberTries").innerHTML = "Number of tries: " + (userAttempts - UsedLetter.length);
            document.getElementById("dashes").innerHTML = answerList.join("  ");
            
        }

        

        if (UsedLetter.length > userAttempts - 1) {

            document.getElementById("dashes").innerHTML = "Game over!";
            console.log(gameOver)
            gameOver === !false;
            UsedLetter = [];
            start()

        }
        if (answerList.indexOf("_") === -1) {
            Score += 1; 
            console.log("You win!")
            document.getElementById("dashes").innerHTML = "You Win! Press enter to Play again!";
            document.getElementById("WinResult").innerHTML = Score;
            gameOver === !false;
           
            UsedLetter = [];
            start()
            
        }
        
    }
}
start()
//game()