//game.js
//wait for page to load completely
$(document).ready(function(){
  // generates random numbers between 19-120 to display at start of game
  var Random = Math.floor(Math.random() * 101 + 19)
  // appends the number to the html document using the id selector
  $('#GemTotal').text(Random);

// generates random numbers between 1-12 to be assigned to each crystal
var num1 = Math.floor(Math.random() * 11 + 1);
var num2 = Math.floor(Math.random() * 11 + 1);
var num3 = Math.floor(Math.random() * 11 + 1);
var num4 = Math.floor(Math.random() * 11 + 1);

// declaring variables to keep track of players progress
var playerScore = 0;
var wins = 0;
var losses = 0;
// appends wins/losses to html doc for player to see their progress
$('#WinTotal').text(wins);
$('#LossTotal').text(losses);

// resets the game
function reset() {
  Random = Math.floor(Math.random() * 101 + 19);
  console.log(Random);
  $('#GemTotal').text(Random);
  num1 = Math.floor(Math.random() * 11 + 1);
  num2 = Math.floor(Math.random() * 11 + 1);
  num3 = Math.floor(Math.random() * 11 + 1);
  num4 = Math.floor(Math.random() * 11 + 1);
  playerScore = 0;
  $('#PlayerTotal').text(playerScore);
} 

// adds number of wins to the playerScore variable 
function winner() {
  wins++;
  $('#WinTotal').text(wins);
  reset();
}

// adds number of losses to the playerScore variable
function loser() {
  losses++;
  $('#LossTotal').text(losses);
  reset();
}

// captures player's click on crystals
$('#GreenGem').on('click', function() {
  playerScore = playerScore + num1;
  console.log("New playerScore = " + playerScore);
  $('#PlayerTotal').text(playerScore);
  // conditionals for determining player's wins/losses
  if (playerScore === Random) {
      winner();
  } else if (playerScore > Random) {
      loser();
  }
})
$('#RedGem').on('click', function() {
  playerScore = playerScore + num2;
  console.log("New playerScore = " + playerScore);
  $('#PlayerTotal').text(playerScore);
  if (playerScore === Random) {
      winner();
  } else if (playerScore > Random) {
      loser();
  }
})
$('#WhiteGem').on('click', function() {
  playerScore = playerScore + num3;
  console.log("New playerScore = " + playerScore);
  $('#PlayerTotal').text(playerScore);
  if (playerScore === Random) {
      winner();
  } else if (playerScore > Random) {
      loser();
  }
})
$('#PurpleGem').on('click', function() {
  playerScore = playerScore + num4;
  console.log("New playerScore = " + playerScore);
  $('#PlayerTotal').text(playerScore);
  if (playerScore === Random) {
      winner();
  } else if (playerScore > Random) {
      loser();
  }
});
});