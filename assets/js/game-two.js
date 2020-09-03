let colorsOrder = []; //array to store the order in which the colours flash.
let playerOrder =[]; //array to store the order the player presses the buttons
let level; //current length of colorsOrders
let highlights; //tracks the number of times that the pc has highlighted a button
let game = false; //boolean to check if game is active or not 
let displayColors; //boolean that inidicates if colours are being highlighted, if not no player interaction
let orderCorrect; //boolean to track if user is clicking the buttons in the correct order
let interval; //variable to allow our interval to be cleared to reset board each turn
let levelReached;
let playSounds = true;
let soundOne = new Audio("assets/sounds/button-1-sound.mp3");
let soundTwo = new Audio("assets/sounds/button-2-sound.mp3");
let soundThree = new Audio("assets/sounds/button-3-sound.mp3");
let soundFour = new Audio("assets/sounds/button-4-sound.mp3");
let soundFive = new Audio("assets/sounds/button-5-sound.mp3");
let sounds=[soundOne,soundTwo,soundThree,soundFour,soundFive];

const playButton = $("#play");
const gameButtons = $(".game-button");
const redButton = $("#red-button");
const blueButton = $("#blue-button");
const greenButton = $("#green-button");
const cyanButton = $("#cyan-button");
const orangeButton = $("#orange-button");



$(playButton).on("click", function(){
    play();
})

function play(){
    colorsOrder = [];
    playerOrder = [];
    highlights = 0;
    interval = 0;
    level = 1;
    $("#level").html(`Level: ${level}`);
    for(let i = 0; i < 50; i++){
        colorsOrder.push(Math.floor(Math.random()*5));
    }
    displayColors = true;
    console.log(colorsOrder);

    interval = setInterval(gameTurn,1000);
    
}

function gameTurn(){
        game = false;
        if(highlights == level){ //computer turn has done as it has the correct number of buttons has been highlighted
            clearInterval(interval);
            displayColors = false;
            game = true;
        }

        if(displayColors == true){
            setTimeout(highlightButton, 200);
        }
}


function highlightButton(){
    if(playSounds == true){
    let num1 = colorsOrder[highlights];
    sounds[num1].play();
    }
    $((gameButtons[colorsOrder[highlights]])).addClass("highlight");
    setTimeout(function(){
         $((gameButtons[colorsOrder[highlights]])).removeClass("highlight");
         highlights++;
    },500);
    
}
$(gameButtons).on("click",function(){
    //need to determine which button has been pushed
    if(game==true){
        let click = $(this);
        let num1 = Number.parseInt($(this).data("num"));
        for(let i = 0; i < gameButtons.length; i++){
            if(num1 == i){
                playerOrder.push(num1);
                if(playSounds == true){
                    sounds[num1].play();
                }
                click.addClass("highlight");
                setTimeout(function(){
                console.log("highlight removed");
                click.removeClass("highlight");
                },500);
            }
        }
        check();    
    }
});

function check(){
    if(playerOrder[playerOrder.length-1] !== colorsOrder[playerOrder.length-1]){
        game = false;
        lose();
    }
    else if(level == playerOrder.length){
        level++;
        playerOrder = [];
        displayColors = true;
        highlights = 0;
        $("#level").html(`Level: ${level}`);
        interval = setInterval(gameTurn, 1000);
    }

}
function lose(){
    levelReached = level;
    sessionStorage.setItem("gameTwoScore", levelReached);
    setTimeout(function(){
        alert(`you have lost, you got to level ${level}. The game will automatically restart`);
        play();
    },300);
    
}

$("#game-two-sound").on("click", function(){
    
    if(playSounds == true){
        console.log("sounds: false");
        playSounds = false;
        $("#game-two-sound").empty().html(`<i class="fas fa-volume-mute"></i>`);
        
    }
    else if(playSounds == false){
        console.log("sounds: true");
        playSounds = true;
        $("#game-two-sound").empty().html(`<i class="fas fa-volume-up"></i>`);
        
    }
})