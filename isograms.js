// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


//solution
function isIsogram(str) {
  return str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
}


//another solution
function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}
