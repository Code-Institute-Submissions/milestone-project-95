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
    console.log("highlight button called");
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
        
        click.addClass("highlight");
        setTimeout(function(){
            console.log("highlight removed");
            click.removeClass("highlight");
            },500);

        if($(click).data("color") == "red"){
            playerOrder.push(0);
            
        }
        if($(click).data("color") == "blue"){
            playerOrder.push(1);
            
        }
        if($(click).data("color") == "green"){
            playerOrder.push(2);
            
        }
        if($(click).data("color") == "cyan"){
            playerOrder.push(3);
            
        }
        if($(click).data("color") == "orange"){
            playerOrder.push(4);
            
        }
        //playerOrder.push(0,1,2,3,4 depending on which button was pressed)
        check();
        
    }

})

/*$(redButton).on("click",function(){
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
})*/



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