let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");


function startGame(){

    if(sum <= 20){
        message = "Do you want to draw a new card?";
    } else if (sum === 21){
        message = "whohoo you have got a blackjack";
    } else {
        message = "you are out of the game";
        isAlive = false;
    }


    

messageEl.textContent = message

}


