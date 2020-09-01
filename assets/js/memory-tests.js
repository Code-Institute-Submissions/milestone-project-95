let gameOneScore = sessionStorage.getItem("gameOneScore");
let gameTwoScore = sessionStorage.getItem("gameTwoScore");

$("#results-button").on("click", function(){
    if(gameOneScore == null && gameTwoScore == null){
        alert("Please play both game 1 and game 2 to allow us to calculate a result");
    }
    else if(gameOneScore !== null && gameTwoScore == null){
        alert(`Your score for game 1 was ${gameOneScore} to allow us to give you a total result please play game 2`);
    }
    else if(gameOneScore == null && gameTwoScore !== null){
        alert(`Your score for game 2 was ${gameTwoScore} to allow us to give you a total result please play game 1`);
    }
    else{
        let result =  (Number.parseInt(gameTwoScore)*2) - Number.parseInt(gameOneScore); //minimum score for gameOne is 8
        if(result > 0){
            alert(`Our algorithm gives you a total score of ${result} currently you are not showing signs of short term memory issues.`);       
         } else{
             alert(`Our algorithm gives you a total score of ${result}, these results inidcate you may have short-term memory issues and should seeek support.
             Please check our support page to see options available to you`);
         }
        }

})