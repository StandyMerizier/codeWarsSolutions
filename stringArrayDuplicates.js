//In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
//
//For example:
//
//dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//
//dup(["kelless","keenness"]) = ["keles","kenes"].
//
//Strings will be lowercase only, no spaces. See test cases for more examples.
//
//Good luck!
//
//If you like this Kata, please try:
//
//Alternate capitalization
//
//Vowel consonant lexicon


//solution
let dup = s => s.map(x => x.replace(/(.)\1+/g,'$1'))
