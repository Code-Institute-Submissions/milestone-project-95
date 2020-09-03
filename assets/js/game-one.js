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
   // console.log(`color: ${color}`);
  //  console.log($(card1).data("color"));
        
    let cardSelector2 = Math.floor(Math.random()*cards.length); 
    let card2 = cards[cardSelector2];
    cards.splice(cardSelector2, 1);
    card2.className += ` ${color}`;
    $(card2).data("color",color);
    }
}

function hideColors(){
    $(".card").addClass("color-neutral");
}

function showColors(){
    $(".card").removeClass("color-neutral");
}

function removeColors(cards){
    for(let i = 0; i < cards.length; i++){
    let currentColor = ($(cards[i]).data("color"));
    $(cards[i]).removeClass(currentColor).data("color","");
    }
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

function music(){
    
    if(backgroundMusic == true){
        sound.play();
        $("#game-one-sound").empty().html(`<i class="fas fa-volume-up"></i>`);
    }
    if(backgroundMusic == false){
        sound.pause();
        $("#game-one-sound").empty().html(`<i class="fas fa-volume-mute"></i>`);
    }
}

$("#game-one-sound").on("click", function(){
    if(backgroundMusic == true){
        console.log("click sound = true");
        backgroundMusic = false;
        
        music();
        return;
    }
    if(backgroundMusic == false){
        console.log("click sound = false");
        backgroundMusic = true;
        
        music();
        return;
    }
})

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
             console.log(`card 1: ${firstCard} card 2: ${secondCard}`);
            $(`.${firstCard}`).off('click');
            $(`.${secondCard}`).off('click');
            scoreCounter += 1;
            matchingPairs += 1;
            setTimeout(resetBoard,500);
            
        }
        else{
            console.log(`card 1: ${firstCard} card 2: ${secondCard}`);
            clickable = false;
            setTimeout(notMatch, 500, firstCard, secondCard);
            scoreCounter +=1;
        
        }
        
    }
    if(matchingPairs === winningScore){
        alert("Congratulations you completed the game. It took you " + scoreCounter + " attempts to match all the pairs");
        finalScore = scoreCounter; 
        sessionStorage.setItem("gameOneScore",finalScore);
        backgroundMusic = false; 
    }
} 

addBoardColors();
hideColors();
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
$("#reset-button").on("click",function(){
    clickable = false;
    cards = $(".card");
    removeColors(cards);
    matchingPairs = 0;
    scoreCounter = 0;
    console.log($(cards).data("color"));
    addBoardColors();
    hideColors();
})



