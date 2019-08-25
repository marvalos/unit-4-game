var randomNumber = 19 + Math.floor(Math.random() * 120);

$("#numberToMatch").html(randomNumber);

var uniqueValues = [];

var InitResetCrystals = function () {
    var crystalNumber;
    while (uniqueValues.length < 4) {
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

var reset = function () {
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

var winCheck = function () {

    if (playerTotal == randomNumber) {
        $("#wins").html(wins++);
        alert("You Win!\nCongratulations!")
        reset();

    } else if (playerTotal > randomNumber) {
        $("#losses").html(losses++);
        alert("You Lose!\nTry again!");
        reset();
    }
};

$("#blue").on("click", function () {
    playerTotal = playerTotal + uniqueValues[0];
    $("#totalScore").html(playerTotal);
    setTimeout(winCheck, 250);
})

$("#green").on("click", function () {
    playerTotal = playerTotal + uniqueValues[1];
    $("#totalScore").html(playerTotal);
    setTimeout(winCheck, 250);
})

$("#red").on("click", function () {
    playerTotal = playerTotal + uniqueValues[2];
    $("#totalScore").html(playerTotal);
    setTimeout(winCheck, 250);
})

$("#yellow").on("click", function () {
    playerTotal = playerTotal + uniqueValues[3];
    $("#totalScore").html(playerTotal);
    setTimeout(winCheck, 250);
})
