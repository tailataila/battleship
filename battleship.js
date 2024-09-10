/* var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6) :");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    }
        else {
            guesses = guesses + 1;
          if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits += 1;
              if (hits == 3) {
                isSunk = true;
                alert("You sunk my battleship!");
              }   
          } else {
            alert("MISS");
          }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats); */

var randomLoc = Math.floor(Math.random() * 5);
// var location1 = randomLoc;
// var location2 = location1 + 1;
// var location3 = location2 + 1;

var locations = [randomLoc, randomLoc + 1, randomLoc + 2];

// console.log(locations);

// var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

var attempts = [];

while (isSunk == false) {
  var guessStr = prompt("Ready, aim, fire! (enter a number from 0-6) :");
  var guess = Number.parseInt(guessStr);
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
    if (locations.includes(guess) && !attempts.includes(guess)) {
      attempts.push(guess);

      hits += 1;
      if (hits === 3) {
        alert("WIN");
      } else {
        alert("HIT!");
      }
      if (hits == 3) {
        isSunk = true;
        alert("You sunk my battleship!");
      }
    } else {
      alert("MISS");
    }
  }
}

var stats =
  "You took " +
  guesses +
  " guesses to sink the battleship, " +
  "which means your shooting accuracy was " +
  3 / guesses;
alert(stats);
