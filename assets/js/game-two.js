let colorsOrder = []; //array to store the order in which the colours flash.
let playerOrder = []; //array to store the order the player presses the buttons
let level; //current length of colorsOrders
let highlights; //tracks the number of times that the pc has highlighted a button
let game = false; //boolean to check if game is active or not
let displayColors; //boolean that inidicates if colours are being highlighted, if not no player interaction
let interval; //variable to allow our interval to be cleared to reset board each turn
let levelReached;
let playSounds = true;
let soundOne = new Audio("assets/sounds/button-1-sound.mp3");
let soundTwo = new Audio("assets/sounds/button-2-sound.mp3");
let soundThree = new Audio("assets/sounds/button-3-sound.mp3");
let soundFour = new Audio("assets/sounds/button-4-sound.mp3");
let soundFive = new Audio("assets/sounds/button-5-sound.mp3");
let sounds = [soundOne, soundTwo, soundThree, soundFour, soundFive];

const playButton = $("#play");
const gameButtons = $(".game-button");

$(playButton).on("click", function () {
  play();
});
//start the game, resets all arrays and numbers and stores the order the colors will flash in an array
function play() {
  colorsOrder = [];
  playerOrder = [];
  highlights = 0;
  game = false;
  interval = 0;
  level = 1;
  $("#level").html(`Level: ${level}`);
  for (let i = 0; i < 50; i++) {
    colorsOrder.push(Math.floor(Math.random() * 5));
  }
  displayColors = true; //computer will display colors so no user interaction

  interval = setInterval(gameTurn, 1000); //every second run the game turn function until interval is cleared
}

function gameTurn() {
  game = false;
  $(playButton).off("click");
  if (highlights == level) {
    //computer turn has finished as it has the correct number of buttons has been highlighted
    clearInterval(interval); //stop running GameTurn
    displayColors = false; //stops computer turn
    game = true; //game is active so users can interact
  }

  if (displayColors == true) {
    setTimeout(highlightButton, 200); //highlight button every 0.2s
  }
}

//plays button sound if sound enabled and adds highlight function to class, removing after 0.5s to give flashing style animation
function highlightButton() {
  if (playSounds == true) {
    let num1 = colorsOrder[highlights];
    sounds[num1].play();
  }
  $(gameButtons[colorsOrder[highlights]]).addClass("highlight");
  setTimeout(function () {
    $(gameButtons[colorsOrder[highlights]]).removeClass("highlight");
    highlights++;
  }, 500);
}
//function that highlights and plays sound of the button the user clicks
$(gameButtons).on("click", function () {
  if (game == true) {
    let click = $(this);
    let num1 = Number.parseInt($(this).data("num"));
    for (let i = 0; i < gameButtons.length; i++) {
      if (num1 == i) {
        playerOrder.push(num1);
        if (playSounds == true) {
          sounds[num1].play();
        }
        click.addClass("highlight");
        setTimeout(function () {
          click.removeClass("highlight");
        }, 500);
      }
    }
    check();
  }
});
//checks to see if the button the user clicked was the correct button
function check() {
  if (
    playerOrder[playerOrder.length - 1] !== colorsOrder[playerOrder.length - 1]
  ) {
    game = false;
    lose();
  }
  //if level is complete then prevent user interaction and allow computer to display colors. Run gameTurn every second
  else if (level == playerOrder.length) {
    game = false;
    level++;
    playerOrder = [];
    displayColors = true;
    highlights = 0;
    $("#level").html(`Level: ${level}`);
    interval = setInterval(gameTurn, 1000);
  }
}
//display modal when the user looses
function lose() {
  game = false;
  levelReached = level;
  $(playButton).on("click", function () {
  play();
});
  sessionStorage.setItem("gameTwoScore", levelReached);
  setTimeout(function () {
    $("#game-two-modal").removeClass("hidden");
    $("#game-two-modal-txt").html(
      `Well done you made it to level ${levelReached}! Click play to try again if you think you can improve your score!`
    );
    $(".close-btn").on("click", function () {
      $("#game-two-modal").addClass("hidden");
    });
  }, 300);
}
//add option for users to mute game sounds
$("#game-two-sound").on("click", function () {
  if (playSounds == true) {
    playSounds = false;
    $("#game-two-sound").empty().html(`<i class="fas fa-volume-mute"></i>`);
  } else if (playSounds == false) {
    playSounds = true;
    $("#game-two-sound").empty().html(`<i class="fas fa-volume-up"></i>`);
  }
});
