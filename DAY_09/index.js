let firstCard = 4;
let secondCard = 11;
let sum = firstCard + secondCard;
console.log(sum);

if (sum < 21){
    console.log("Do you want to draw a new card?");
} else if (sum == 21){
    console.log("whohoo you have got a blackjack");
} else if (sum > 21){
    console.log("you are out of the game");
}