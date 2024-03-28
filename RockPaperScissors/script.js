// set game rules:
// if rock vs paper = paper wins
// if rock vs scissors = rock wins
// if paper vs scissors = scissors wins
// if any vs the same = tie and no point
// first to 3 points wins

// generate a random output of either rock, paper or scissors from the computers end
// create an input for the human player
// compare the users input to the computers input


let attempt = ["rock", "paper", "scissors"];

function playGame() {
    let attemptValue = attempt.values();
  let randomIdx= Math.floor(Math.random()*attempt.length);
  let randomGuess = attempt[randomIdx];
  console.log("computerGuess", randomGuess);
};
