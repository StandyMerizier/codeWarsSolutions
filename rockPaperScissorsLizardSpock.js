// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

// Inputs
// Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".




//solution
function rpsls(pl1,pl2){
//Your Magnificent Code here
  if(pl1 === "rock" && (pl2 === "scissors" || pl2 === "lizard")){
    return "Player 1 Won!"
  }
  else if(pl2 === "rock" && (pl1 === "scissors" || pl1 === "lizard")){
    return "Player 2 Won!"
  }
  else if(pl1 === "scissors" && (pl2 === "paper" || pl2 === "lizard")){
    return "Player 1 Won!"
  }
  else if(pl2 === "scissors" && (pl1 === "paper" || pl1 === "lizard")){
    return "Player 2 Won!"
  }
  else if(pl1 === "paper" && (pl2 === "rock" || pl2 === "spock")){
    return "Player 1 Won!"
  }
  else if(pl2 === "paper" && (pl1 === "rock" || pl1 === "spock")){
    return "Player 2 Won!"
  }
  else if(pl1 === "lizard" && (pl2 === "spock" || pl2 === "paper")){
    return "Player 1 Won!"
  }
  else if(pl2 === "lizard" && (pl1 === "spock" || pl1 === "paper")){
    return "Player 2 Won!"
  }
  else if(pl1 === "spock" && (pl2 === "scissors" || pl2 === "rock")){
    return "Player 1 Won!"
  }
  else if(pl2 === "spock" && (pl1 === "scissors" || pl1 === "rock")){
    return "Player 2 Won!"
  }
  
  return "Draw!"

}


//another solution
const MATCH = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};


function rpsls(pl1, pl2) {
  return MATCH[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' :
         MATCH[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';
}
