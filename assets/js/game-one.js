
//An array holding the different colors of for the game.
const colors = ["orange", "red", "blue", "pink", "cyan", "green", "purple", "tan"];
//Select cards as an array
function getCards(cards){
    let a = [];
    for( let i = 0; i < cards.length; i++){
        a.push(cards[i]);
    }
    return a;
}

function hideCards(cardsArray){
    for(let card in cardsArray){
        cardsArray[card].className += ` color-hidden`;
    }
}


let cards = getCards($(".card"));

setTimeout(hideCards,5000,getCards($(".card")));

for( let color of colors){
    //generate 2 random values between 0 and 15 to pick 2 cards 
    let random1 = Math.floor(Math.random()*cards.length);
    let cardA = cards[random1];
    cards.splice(random1, 1);
    cardA.className += ` ${color}`;
        
    let random2 = Math.floor(Math.random()*cards.length); 
    let cardB = cards[random2];
    cards.splice(random2, 1);
    cardB.className += ` ${color}`;
}


