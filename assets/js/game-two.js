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
let matches; //the number of matches the player has gotten correct in the current level
let game = false; //boolean to check if game is active or not 
let displayColors; //boolean that inidicates if colours are being highlighted, if not no player interaction

const playButton = $("#play");
const gameButtons = $(".game-button");
const redButton = $("#red-button");
const blueButton = $("#blue-button");
const greenButton = $("#green-button");
const cyanButton = $("#cyan-button");
const yellowButton = $("#yellow-button");

$(playButton).on("click", function(){
    play();
})

function play(){
    colorsOrder = [];
    playerOrder = [];
    level = 1;
    $("#level").html(`Level: ${level}`);
}

function gameTurn(){

}


function highlightButton(){

}

function lose(){

}