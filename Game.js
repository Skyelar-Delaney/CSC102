function rollDice() {
    //Generates random numbers for the dice between 1 - 6
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    //Calculates the sum of the dice 
    let total = die1 + die2;
    
    //Updates the content and displays the dice results 
    document.getElementById("dice1").textContent = die1;
    document.getElementById("dice2").textContent = die2;

    //Results based on the total of the dice
    if (total === 7 || total === 11) {
        //Displays the you win message
        document.getElementById("result").textContent = "You Win!";
    } else if (total === 2 || total === 3 || total === 12) {
        //diplays the you loose message
        document.getElementById("result").textContent = "You Lose!";
    } else {
        //displays the point number
        document.getElementById("result").textContent = "Point is " + total;
    }
}