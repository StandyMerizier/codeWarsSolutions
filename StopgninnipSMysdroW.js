//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//
//Examples:
//
//spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
//spinWords( "This is a test") => returns "This is a test" 
//spinWords( "This is another test" )=> returns "This is rehtona test"


//solution
function spinWords(string){
  let newString = ''
  let arrString = string.split(" ")
  for(let i = 0; i<arrString.length; i++){
    if(arrString[i].length >= 5){
      let rever = arrString[i].split("").reverse().join("")
      arrString[i] = rever
    }
  }
  return newString = arrString.join(" ")
}

//optimized solution
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

