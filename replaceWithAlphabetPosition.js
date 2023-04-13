// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


//solution
function alphabetPosition(text) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split('')
  
  return text.toLowerCase().split('').filter(el => el >= 'a' & el <= 'z').map(el => letters.indexOf(el) + 1 ).join(' ')
}


//another solution
function alphabetPosition(text) {
  return text.toLowerCase().replace(/[^a-zA-Z]/g, '')// cannot use /[^A-z]/
      .split('')
      .map(item => item.charCodeAt() - 96)
      .join(' ');
}

