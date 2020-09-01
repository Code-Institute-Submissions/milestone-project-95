/*let colors = [];
let click;
let buttons = $("div.game-button");
let game = false;
let level = 0;
let win = 0;
let match = 0;

function highlightNewButton() {
  let selectButton = Math.floor(Math.random() * 5);
  buttons[selectButton].classList.add("highlight");
  setTimeout(function () {
    buttons[selectButton].classList.remove("highlight");
  }, 1000);
  colors.push(buttons[selectButton].getAttribute("data-color"));
}

function highlightOldButtons() {
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    console.log(color);
    $(`div#${color}-button`).addClass("highlight");
    setTimeout(function () {
      $(`div#${color}-button`).removeClass("highlight");
    }, 1000);
  }
}
function startLevel() {
  level++;
  game = true;
  setTimeout(highlightNewButton, 1000);
}

function resetGame() {}

function check() {
  startLevel();
  while (game === true && level > win) {
    for (i = 0; i < level; i++) {
      colorCheck = colors[i];
      click = $(this).data("color");
      if (click === colorCheck) {
        console.log("Win");
        match++;
        if(match < level){
            setTimeout(highlightOldButtons,1000);
        }
        if (match === level) {
          win = match;
          match = 0;
        }
      } else {
        console.log("Lose");
        game = false;
        colors = [];
      }
    }
  }
}
setTimeout(highlightNewButton, 1000);
$(".game-button").on("click", check);*/

let colorsOrder = []; //array to store the order in which the colours flash.
let playerOrder =[]; //array to store the order the player presses the buttons
let level; //current length of colorsOrders
let highlights; //tracks the number of times that the pc has highlighted a button
let game = false; //boolean to check if game is active or not 
let displayColors; //boolean that inidicates if colours are being highlighted, if not no player interaction
let orderCorrect; //boolean to track if user is clicking the buttons in the correct order
let interval; //variable to allow our interval to be cleared to reset board each turn
let levelReached;

const playButton = $("#play");
const gameButtons = $(".game-button");
const redButton = $("#red-button");
const blueButton = $("#blue-button");
const greenButton = $("#green-button");
const cyanButton = $("#cyan-button");
const orangeButton = $("#orange-button");

console.log(gameButtons[2]);

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

    interval = setInterval(gameTurn,750);
    
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
    console.log("highlight button called");
    $((gameButtons[colorsOrder[highlights]])).addClass("highlight");
    setTimeout(function(){
         $((gameButtons[colorsOrder[highlights]])).removeClass("highlight");
         highlights++;
    },500);
    
}

$(redButton).on("click",function(){
    if(game == true){
        playerOrder.push(0);
        check();
        $(redButton).addClass("highlight")
        setTimeout(function(){
            $(redButton).removeClass("highlight")
        },500);

    }
})

$(blueButton).on("click",function(){
    if(game == true){
        playerOrder.push(1);
        check();
        $(blueButton).addClass("highlight");
        setTimeout(function(){
            $(blueButton).removeClass("highlight");
        },500);

    }
})

$(greenButton).on("click",function(){
    if(game == true){
        playerOrder.push(2);
        check();
        $(greenButton).addClass("highlight");
        setTimeout(function(){
            $(greenButton).removeClass("highlight");
        },500);

    }
})

$(cyanButton).on("click",function(){
    if(game == true){
        playerOrder.push(3);
        check();
        $(cyanButton).addClass("highlight");
        setTimeout(function(){
            $(cyanButton).removeClass("highlight");
        },500);

    }
})

$(orangeButton).on("click",function(){
    if(game == true){
        playerOrder.push(4);
        check();
        $(orangeButton).addClass("highlight");
        setTimeout(function(){
            $(orangeButton).removeClass("highlight");
        },500);

    }
})



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
        interval = setInterval(gameTurn, 750);
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