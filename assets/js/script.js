var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset");
var word = document.querySelector(".word-guess");
var wins = document.querySelector(".win");
var losses = document.querySelector(".lose");
var timer = document.querySelector(".timer-count");

var passableWords = ["Laura", "Wifey", "Girlfriend", "Yummy", "Miracle"]
var chosenWord = "";
var newWordAnswer = [];


function wordChooser () {
    var i = Math.floor(Math.random() * passableWords.length) ;
    chosenWord = passableWords[i].toLowerCase();
    word.innerHTML = "_".repeat(chosenWord.length);
    console.log(chosenWord);
}

function keyDetector () {
    document.addEventListener("keypress", function(event) {
        var chosenKey = event.key
        if (chosenWord.includes(chosenKey)) {
            newWordAnswer.push(chosenKey);
            console.log("The word has this letter!");
        }
    })
}

function wordRevealer () {

}


// Rolls out functions when the start button is clicked
function startGame () {
    startButton.addEventListener("click", function() {
        wordChooser();
        keyDetector();
    })
}

startGame();








// List of varaibles that select HTML that need to be interacted with
// Start button selection
// reset button selection
// Where the words are selection
// Wins selection
// Losses selection
// Timer selection


// Array of word list

// Start button function FUNCTION
// Reset button FUNCTION


// Array random choice FUNCTION
// You want to display dashed lines depending on the length of the chosen array item
// Then it will run the key detector function

// Key detector and implement FUNCTION

// Win detector FUNCTION

// Loss detector FUNCTION

// Count down time FUNCTION

// Setting storage FUNCTION

