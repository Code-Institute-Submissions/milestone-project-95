const colors = ["orange", "red", "blue", "pink", "cyan", "green", "purple", "brown"];
let firstCard, secondCard;
let firstClick,secondClick;
let clickable = true;

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
    clickable = true;
    console.log("reset board called");
}

function notMatch(card1, card2){
    $(`.${card1}`).addClass("color-neutral");
    $(`.${card2}`).addClass("color-neutral");
    resetBoard();
}

function flipCard(){
    if(clickable === false) return;
    if(firstCard === undefined && secondCard === undefined){
        $(this).removeClass("color-neutral");
        firstCard = $(this).data("color");
        firstClick = this;

        
    }
    else if(firstCard != undefined && secondCard === undefined ){
        if(this === firstClick) return;
        $(this).removeClass("color-neutral");
        secondCard = $(this).data("color");
    }

    if(firstCard != undefined && secondCard != undefined){
        if(firstCard === secondCard){
             clickable = false;
            console.log("cards are equal");
            $(`.${firstCard}`).off('click');
            $(`.${secondCard}`).off('click');
           
            setTimeout(resetBoard,500);
            
        }
        else{
            console.log("cards are not equal");
            clickable = false;
            setTimeout(notMatch, 500, firstCard, secondCard);
        
        }
        
    }
} 

addBoardColors();

setTimeout(hideColors, 3000);

$(".card").on("click",flipCard);
