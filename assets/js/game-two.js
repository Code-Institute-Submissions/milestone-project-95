let colors = [];
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
$(".game-button").on("click", check);
