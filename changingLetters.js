// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


//solution
function swap (string) {
  return string.split('').map(el => ['a', 'e', 'i', 'o', 'u'].includes(el) ? el.toUpperCase() : el).join('');
}

//another solution
var swap = string => string.replace(/[aeiou]/g, v => v.toUpperCase());
