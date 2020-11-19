//I'm creating a scoreboard on my game website, but I want the score to be displayed as tally marks instead of Roman numerals. Write a function that translates the numeric score into tally marks.
//
//My tally mark font uses the letters a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5, respectively. I want a space and line break (<br>) after each completed tally (5).
//
//Assume that the score you receive will be an integer. This function should return an HTML string that I can insert into my website that represents the correct score.


//solution
var scoreToTally = function(score){
  if(score === 1) return 'a'
  else if(score === 2) return 'b'
  else if(score === 3) return 'c'
  else if(score === 4) return 'd'
  else if(score === 5) return 'e <br>'
  else if(score%5 === 0) return 'e <br>'.repeat(score/5)
  else if(score%5 === 4) return 'e <br>'.repeat(score/5) + 'd'
  else if(score%5 === 3) return 'e <br>'.repeat(score/5) + 'c'
  else if(score%5 === 2) return 'e <br>'.repeat(score/5) + 'b'
  else return'e <br>'.repeat(score/5) + 'a'
}


//another solution
scoreToTally = score => 'e <br>'.repeat((score / 5) | 0) + ['', 'a', 'b', 'c', 'd'][score % 5];

