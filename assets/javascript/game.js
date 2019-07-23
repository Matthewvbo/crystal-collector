$(document).ready(function(){

    let winCount = 0
    $('#winScore').text("Wins: " + winCount)

    let lossCount = 0
    $('#lossScore').text("Losses: " + lossCount)

    let userScore = 0
    let gameScore = Math.floor(Math.random() * 102) + 17
    let heartCrystal = Math.floor(Math.random() * 12) + 1
    let orangecrystal = Math.floor(Math.random() * 12) + 1
    let purpleCrystal = Math.floor(Math.random() * 12) + 1
    let redCrystal = Math.floor(Math.random() * 12) + 1

    $("#gameScore").text("Game Score: " + gameScore);
    $("#userScore").text("User Score: " + userScore);

    console.log(gameScore)
    console.log(heartCrystal)
    console.log(orangecrystal)
    console.log(purpleCrystal)
    console.log(redCrystal)


    function resetGame() {
        let userScore = 0
    gameScore = Math.floor(Math.random() * 102) + 17
    heartCrystal = Math.floor(Math.random() * 12) + 1
    orangecrystal = Math.floor(Math.random() * 12) + 1
    purpleCrystal = Math.floor(Math.random() * 12) + 1
    redCrystal = Math.floor(Math.random() * 12) + 1

    $("#gameScore").text("Game Score: " + gameScore);
    $("#userScore").text("User Score: " + userScore);

    console.log(gameScore)
    console.log(heartCrystal)
    console.log(orangecrystal)
    console.log(purpleCrystal)
    console.log(redCrystal)
    }

    function winGame() {
        alert("You win! Play again?")
        winCount = winCount + 1
        $("#winScore").text("Wins: " + winCount)
        resetGame()
    }

    function looseGame() {
        alert("You win! Play again?")
        winCount = winCount + 1
        $("#lossScore").text("Losses: " + lossCount)
        resetGame()
    }

    $('#heartcrystal').click(function(){
        userScore = userScore + heartCrystal
        console.log("User Score: " + userScore)
        $("#userScore").text("User Score: " + userScore)
            if (userScore === gameScore) {
                winGame()
            }else if ( userScore > gameScore) {
                looseGame()
            }
    });

    $('#orangecrystal').click(function(){
        userScore = userScore + orangecrystal
        console.log("User Score: " + userScore)
        $("#userScore").text("User Score: " + userScore)
            if (userScore === gameScore) {
                winGame()
            }else if ( userScore > gameScore) {
                looseGame()
            }
    });

    $('#purplecrystal').click(function(){
        userScore = userScore + purpleCrystal
        console.log("User Score: " + userScore)
        $("#userScore").text("User Score: " + userScore)
            if (userScore === gameScore) {
                winGame()
            }else if ( userScore > gameScore) {
                looseGame()
            }
    });

    $('#redcrystal').click(function(){
        userScore = userScore + redCrystal
        console.log("User Score: " + userScore)
        $("#userScore").text("User Score: " + userScore)
            if (userScore === gameScore) {
                winGame()
            }else if ( userScore > gameScore) {
                looseGame()
            }
    });
})
