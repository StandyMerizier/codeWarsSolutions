//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
//doubleChar("String") ==> "SSttrriinngg"
//
//doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
//
//doubleChar("1234!_ ") ==> "11223344!!__  "
//Good Luck!


//solution
function doubleChar(str) {
  return str.split('').map(el => el + el).join(''); 
}


//another solution
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}
