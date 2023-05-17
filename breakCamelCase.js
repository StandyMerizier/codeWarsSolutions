// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


//solution
function solution(string) {
    let output =''
    for(let letter of string){
      if(letter === letter.toUpperCase()){
        output += ' ' + letter
      }
      else {
        output += letter
      }
    }
  return output
}


//another solution
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

