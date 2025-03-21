let favNumb = 14; 
let userGuess; 

while (userGuess !== favNumb) {
    userGuess = parseInt(prompt("Guess my Favorite Number:"));

    if (userGuess < favNumb) {
        console.log("Too low!");
    } else if (userGuess > favNumb) {
        console.log("Too high!");
    } else {
        console.log("Correct!");
    }
}
