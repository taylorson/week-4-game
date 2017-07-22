$( document ).ready(function() {

  //Setting all variables to 0
  var targetNumber = 0;  
  var totalScore = 0;  
  var userWins = 0;
  var userLosses = 0;
  var blueCrystal = 0;
  var greenCrystal = 0;
  var yellowCrystal = 0;
  var clearCrystal = 0;

  //Function to start game
  var startGame = function(){
  
    //Sets the number to match as a random number
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    $("#number-match").text(targetNumber);

    //Set each crystal to a random number
    blueCrystal = Math.floor((Math.random() * 12) + 1);
    greenCrystal = Math.floor((Math.random() * 12) + 1);
    yellowCrystal = Math.floor((Math.random() * 12) + 1);
    clearCrystal = Math.floor((Math.random() * 12) + 1);

    //Setting user score back to 0 and displaying scoreboard to html
    totalScore = 0;
    $("#total-score").text(" " + totalScore);
    $("#wins").text(" " + userWins);
    $("#losses").text(" " + userLosses);

    //Logging random target number and crystal values
    console.log(blueCrystal);
    console.log(greenCrystal);
    console.log(yellowCrystal);
    console.log(clearCrystal);
    console.log(targetNumber);
    console.log("\n");

  };

  //Calling start game function
  startGame();

  //Setting the click functions for each crystal
  $("#blue-crystal").on("click", function() {
    totalScore = totalScore + blueCrystal;
    $("#total-score").text(" " + totalScore);
    match();
  });

  $("#green-crystal").on("click", function() {
    totalScore = totalScore + greenCrystal;
    $("#total-score").text(" " + totalScore);
    match();
  });

  $("#yellow-crystal").on("click", function() {
    totalScore = totalScore + yellowCrystal;
    $("#total-score").text(" " + totalScore);
    match();
  });

  $("#clear-crystal").on("click", function() {
    totalScore = totalScore + clearCrystal;
    $("#total-score").text(" " + totalScore);
    match();
  });

    // Defining function to determine if the user wins/losses
    var match = function() {
        if (totalScore === targetNumber) {
          alert("Winner! Winner!");
          userWins = userWins + 1;
          $("#wins").text(userWins);
          startGame();
        }

        if (totalScore > targetNumber) {
          alert("YOU LOSE!");
          userLosses = userLosses + 1;
          $("#losses").text(userLosses);
          startGame();
        }
    };

});