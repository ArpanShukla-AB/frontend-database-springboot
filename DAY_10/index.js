let isVegan = true;
console.log(isVegan);

function processOrder(){
    if (isVegan){
        console.log("Here is your vegan menu");
    } else {
        console.log("Here is your regular menu");
    }
}

processOrder();