// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


//solution
function toCamelCase(str){
  if(str === ''){
    return str
  }
  
  let output = ''
  
  let strArr = str.replace(/[-_]+/g, ' ').split(' ')
    
  for(let word of strArr){
    if(strArr.indexOf(word) === 0){
      output += word
    }
    else{
      output += word.charAt(0).toUpperCase() + word.slice(1)
    }
  }
  
  return output
}


//another solution
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

