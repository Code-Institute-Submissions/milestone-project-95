let colors = ["red","blue","green","cyan","orange"];
let click,color;
let buttons = $("div.game-button");


let selectButton = Math.floor(Math.random()*colors.length);
buttons[selectButton].classList.add("highlight");
setTimeout(function(){
    buttons[selectButton].classList.remove("highlight");
},1000);
 
localStorage.color = buttons[selectButton].getAttribute("data-color");;

function check(){
    colorCheck = localStorage.color;
    click = $(this).data("color");
    if(click === colorCheck){
        console.log("Win");
    }
}

$("game-button").on("click",check);