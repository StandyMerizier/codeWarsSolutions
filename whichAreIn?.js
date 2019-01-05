//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//
//#Example 1: a1 = ["arp", "live", "strong"]
//
//a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
//returns ["arp", "live", "strong"]
//
//#Example 2: a1 = ["tarp", "mice", "bull"]
//
//a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
//returns []
//
//Notes:
//Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
//
//In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
//
//Beware: r must be without duplicates.
//Don't mutate the inputs.


//solution
function inArray(array1,array2){
  let sub = []
  for(let i=0; i<array1.length; i++){
    for(let j=0; j<array2.length; j++){
      if(array2[j].includes(array1[i])){
        sub.push(array1[i])
      }
    }
  }
  let unique = sub.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  })
  return unique.sort()
}


//another solution
function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
