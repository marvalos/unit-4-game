var randomNumber = 19 + Math.floor(Math.random() * 120);

//show this number under #numToGuess
$("#numberToMatch").html(randomNumber);

var uniqueValues = [];

//computer randomly selects a unique random number between 1 - 12 for each crystal - each crystal will be assinged a unique random number
var InitResetCrystals = function() {
    var crystalNumber;
    while (uniqueValues.length < 4){
        crystalNumber = 1 + Math.floor(Math.random() * 12);
        if (jQuery.inArray(crystalNumber, uniqueValues) == '-1') {
            uniqueValues[uniqueValues.length] = crystalNumber;
        } 
    }
}

var playerTotal = 0;
var wins = 0;
var losses = 0;
$("#totalScore").html(playerTotal);
$("#wins").html(wins);
$("#losses").html(losses);
InitResetCrystals();

var reset = function() {
    playerTotal = 0;
    randomNumber = 18 + Math.floor(Math.random() * 120);
    uniqueValues = [];
    InitResetCrystals();
    console.log(randomNumber);
    $("#numberToMatch").html(randomNumber);
    $("#totalScore").html(playerTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
}
 
var winCheck = function() {

    if (playerTotal == randomNumber) {
        $("#wins").html(wins++);         

        $("#modalText").html("You Win!");
        modal.style.display = "block";  
        reset();                    

    } else if (playerTotal > randomNumber) {
        $("#losses").html(losses++);         

        $("#modalText").html("You Lose! Try Again!"); 
        modal.style.display = "block"; 
        reset();               
    }
};

//whenever user clicks a crystal, the random number is added to total score.
$("#blue").on("click", function() {
    playerTotal = playerTotal + uniqueValues[0]; 
    $("#totalScore").html(playerTotal);
    setTimeout(winCheck, 250);
})

$("#green").on("click", function() {
    playerTotal = playerTotal + uniqueValues[1]; 
    $("#totalScore").html(playerTotal);
    setTimeout(winCheck, 250);
})

$("#red").on("click", function() {
    playerTotal = playerTotal + uniqueValues[2]; 
    $("#totalScore").html(playerTotal);
    setTimeout(winCheck, 250);
})

$("#yellow").on("click", function() {
    playerTotal = playerTotal + uniqueValues[3]; 
    $("#totalScore").html(playerTotal);
    setTimeout(winCheck, 250);
})

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        reset();
    }
}
