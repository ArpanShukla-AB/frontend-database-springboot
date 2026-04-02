let firstCard = 4;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum < 21){
    message = "Do you want to draw a new card?";
    isAlive = false;
    console.log(isAlive);
} else if (sum == 21){
    message = "whohoo you have got a blackjack";
    hasBlackJack = true;
} else if (sum > 21){
    message = "you are out of the game";
    isAlive = false;
}

console.log(message);

