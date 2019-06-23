
var validGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordList = ["chocobo", "materia", "bahamut", "crystal", "summoner", "ifrit", "shiva", "cure"]

var computerWord = wordList [Math.floor(Math.random() * wordList.length)];
console.log(computerWord)

var answerList = [];

for (var i = 0; i < computerWord.length; i++) {
    answerList[i] = "_";
}

var remainingLetters = computerWord.length;


document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    if (validGuess.indexOf(userGuess) > -1) {
        console.log("valid key " + userGuess + " pressed!")
        for (var i = 0; i < computerWord.length; i++){
            if (computerWord.charAt(i) === userGuess){
                answerList[i] = userGuess;
            console.log(answerList)}
        }
}
    else {
        console.log("invalid key pressed!")
    }
    document.getElementById("demo").innerHTML = answerList.join("  ");

}


 