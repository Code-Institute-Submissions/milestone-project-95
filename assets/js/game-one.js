const colors = ["orange", "red", "blue", "pink", "cyan", "green", "purple", "brown"];
let firstCard, secondCard;

let cards = $(".card");
/*Loop that loops through our array of colours and selects a random card, removes that card so it cannot be selected again, and adds the class colour and sets the data attribute 
of that card to be equal to the color*/
function addBoardColors(){
    for(let color of colors){
   
    let cardSelector1 = Math.floor(Math.random()*cards.length);
    let card1 = cards[cardSelector1];
    cards.splice(cardSelector1, 1);
    card1.className += ` ${color}`;
    card1.setAttribute('data-color',color);
        
    let cardSelector2 = Math.floor(Math.random()*cards.length); 
    let card2 = cards[cardSelector2];
    cards.splice(cardSelector2, 1);
    card2.className += ` ${color}`;
    card2.setAttribute('data-color',color);
    }
}

function hideColors(){
    $(".card").addClass("color-neutral");
}

function resetBoard(){
    firstCard = undefined;
    secondCard = undefined;
}

function notMatch(card1, card2){
    $(`.${card1}`).addClass("color-neutral");
    $(`.${card2}`).addClass("color-neutral");
}

function flipCard(){
    if(firstCard === undefined){
        $(this).removeClass("color-neutral");
        firstCard = $(this).data("color");
        
    }
    else if(firstCard != undefined && secondCard === undefined ){
        $(this).removeClass("color-neutral");
        secondCard = $(this).data("color");
    }

    if(firstCard != undefined && secondCard != undefined){
        if(firstCard === secondCard){
            console.log("It's a match")
            $(`.${firstCard}`).off('click');
            $(`.${secondCard}`).off('click');
        }
        else{
            //$(`.${firstCard}`).addClass("color-neutral");
            //$(`.${secondCard}`).addClass("color-neutral");
            setTimeout(notMatch, 600, firstCard, secondCard);
            
        }
        resetBoard();
    }
} 

addBoardColors();

setTimeout(hideColors, 3000);

$(".card").on("click",flipCard);
