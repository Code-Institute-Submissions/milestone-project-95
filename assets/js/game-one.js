const colors = ["orange", "red", "blue", "pink", "cyan", "green", "purple", "brown"];
let firstCard, secondCard;
let firstClick,secondClick;
let clickable = false;
let scoreCounter = 0;
let matchingPairs = 0;
const winningScore = 8;
let finalScore;
let backgroundMusic = false;
let cards = $(".card");
let sound = new Audio("assets/sounds/game1-background.mp3");

/*Loop that loops through our array of colours and selects a random card, removes that card so it cannot be selected again, and adds the class colour and sets the data attribute 
of that card to be equal to the color*/
function addBoardColors(){
    for(let color of colors){
   
    let cardSelector1 = Math.floor(Math.random()*cards.length);
    let card1 = cards[cardSelector1];
    cards.splice(cardSelector1, 1);
    card1.className += ` ${color}`;
    $(card1).data("color",color);
        
    let cardSelector2 = Math.floor(Math.random()*cards.length); 
    let card2 = cards[cardSelector2];
    cards.splice(cardSelector2, 1);
    card2.className += ` ${color}`;
    $(card2).data("color",color);
    }
}
//Hides the colurs by adding color-netural class
function hideColors(){
    $(".card").addClass("color-neutral");
}
//Shows all colours by removing color-neutral class
function showColors(){
    $(".card").removeClass("color-neutral");
}
//removes all data attributes and color class from card to allow full game board to reset without duplication
function removeColors(cards){
    for(let i = 0; i < cards.length; i++){
    let currentColor = ($(cards[i]).data("color"));
    $(cards[i]).removeClass(currentColor).data("color","");
    }
}
//after two cards have been clicked allow cards to be clicked again and clear stored variables
function resetBoard(){
    firstCard = undefined;
    secondCard = undefined;
    clickable = true;
}
//if card 1 and card 2 don't match reset board and hide the cards
function notMatch(card1, card2){
    $(`.${card1}`).addClass("color-neutral");
    $(`.${card2}`).addClass("color-neutral");
    resetBoard();
}
//play music when game is played or if sound button clicked
function music(){
    
    if(backgroundMusic == true){
        sound.play();
        sound.loop = true;
        $("#game-one-sound").empty().html(`<i class="fas fa-volume-up"></i>`);
    }
    if(backgroundMusic == false){
        sound.pause();
        $("#game-one-sound").empty().html(`<i class="fas fa-volume-mute"></i>`);
    }
}
//add click to function to sound icon to turn music on and off
$("#game-one-sound").on("click", function(){
    if(backgroundMusic == true){
        backgroundMusic = false;
        music();
        
    }
    else if(backgroundMusic == false){
        backgroundMusic = true;
        music();
    }
})
//Main function that is called when a card is clicked
function flipCard(){
    if(clickable === false) return; //prevents unwanted clicking of cards
    if(firstCard === undefined && secondCard === undefined){
        $(this).removeClass("color-neutral"); //show first card and store it's color
        firstCard = $(this).data("color");
        firstClick = this;

        
    }
    else if(firstCard != undefined && secondCard === undefined ){
        if(this === firstClick) return; //if click the same card twice in a row then reset
        $(this).removeClass("color-neutral"); //show second card and store it's color
        secondCard = $(this).data("color");
    }

    if(firstCard != undefined && secondCard != undefined){
        if(firstCard === secondCard){
             clickable = false; //prevent addiotnal clicks when going through comparison loop
            $(`.${firstCard}`).off('click'); //remove click function from matched cards to prevent cheating
            $(`.${secondCard}`).off('click');
            scoreCounter += 1;
            matchingPairs += 1;
            setTimeout(resetBoard,500);//after .5s reset board and allow users to click again 
            
        }
        else{
            clickable = false;
            setTimeout(notMatch, 500, firstCard, secondCard);
            scoreCounter +=1;
        }
        
    }//display modal upon getting all matching pairs
    if(matchingPairs === winningScore){
        $("#game-one-modal").removeClass("hidden");
        $("#game-one-modal-txt").html("Congratulations you completed the game. It took you " + scoreCounter + " attempts to match all the pairs");
        $(".close-btn").on("click", function(){
            $("#game-one-modal").addClass("hidden");
        });
        finalScore = scoreCounter; 
        sessionStorage.setItem("gameOneScore",finalScore);
        backgroundMusic = false; 
    }
} 
//on load add colours to the cards and hide so user cannot see
addBoardColors();
hideColors();
//button to begin the game
$("#play-button").on("click", function(){
    showColors();
    backgroundMusic = true;
    music();
    setTimeout(function(){
        hideColors();
        clickable=true;
        $(".card").on("click",flipCard);        
    }, 3000);
})
//buttn to reset game
$("#reset-button").on("click",function(){
    clickable = false;
    cards = $(".card");
    removeColors(cards);
    matchingPairs = 0;
    scoreCounter = 0;
    addBoardColors();
    hideColors();
})



